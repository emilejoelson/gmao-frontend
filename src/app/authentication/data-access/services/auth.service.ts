import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { DateTime } from 'luxon';
import {
  EMPTY,
  Observable,
  Subject,
  catchError,
  finalize,
  map,
  of,
  switchMap,
  tap,
} from 'rxjs';
import { environment } from '../../../../environment/environment';
import { ErrorHandlerService } from '../../../shared/services/error-handler.service';
import { TBaseResponse } from '../../../shared/utils/definitions/response';
import {
  IAuthResponse,
  ILoginRequest,
  IRefreshTokenRequest,
  IResponseDto,
} from '../models/login';
import { ITokenValue } from '../models/token';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authBaseUrl: string = `${environment.apiUrl}`;
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  private http = inject(HttpClient);
  private router = inject(Router);
  private errorHandlerService = inject(ErrorHandlerService);
  private loginCredentialsSubject = new Subject<ILoginRequest | null>();
  private loginCredentials$ = this.loginCredentialsSubject.asObservable();

  private loginResponseState = toSignal(
    this.loginCredentials$.pipe(
      tap((userData) => {
        if (userData) {
          console.log(
            '📤 About to make HTTP request to:',
            `${this.authBaseUrl}/auth/login`
          );
          this.isLoginLoadingSignal.set(true);
        }
      }),
      switchMap((userData) =>
        userData
          ? this.http
              .post<IAuthResponse>(
                `${this.authBaseUrl}/auth/login`,
                userData,
                this.httpOptions
              )
              .pipe(
                tap(() =>
                  console.log('✅ HTTP request initiated successfully')
                ),
                map((res) => {
                  return {
                    error: null,
                    result: res,
                  } as TBaseResponse<IAuthResponse>;
                }),
                catchError((error) => {
                  console.error('❌ HTTP Error occurred:', error);
                  console.error('❌ Error details:', {
                    message: error.message,
                    status: error.status,
                    statusText: error.statusText,
                    url: error.url,
                    name: error.name,
                  });
                  return this.errorHandlerService.handleError<IAuthResponse>(
                    'login'
                  )(error);
                }),
                tap((res) => {
                  if (!res.error && res.result) {
                    this.setAuthInfoToLocalStorage(res.result);
                  }
                }),
                finalize(() => {
                  this.isLoginLoadingSignal.set(false);
                })
              )
          : of(null)
      )
    ),
    { initialValue: null }
  );

  loginErrorMessage = computed(() => {
    return this.loginResponseState()?.error ?? null;
  });

  private isLoginLoadingSignal = signal(false);

  isLoginLoading = computed(() => {
    return this.isLoginLoadingSignal();
  });

  private onLoginSubject = new Subject<string>();
  onLogin$ = this.onLoginSubject.asObservable();

  private onLogoutSubject = new Subject<string>();
  onLogout$ = this.onLogoutSubject.asObservable();

  login(loginData: ILoginRequest | null) {
    console.log('🔗 Full login URL will be:', `${this.authBaseUrl}/auth/login`);
    this.loginCredentialsSubject.next(loginData);
  }

  private onLogin() {
    this.router.navigate(['/workspace']);
  }

  tokenRefrechHandler(refreshToken: string): Observable<IAuthResponse> {
    const refreshRequest: IRefreshTokenRequest = { refreshToken };

    return this.http
      .post<IAuthResponse>(
        `${this.authBaseUrl}/auth/refresh`,
        refreshRequest,
        this.httpOptions
      )
      .pipe(
        tap((auth) => this.setAuthInfoToLocalStorage(auth, true)),
        catchError((error) => {
          console.error('refreshToken', error);
          this.logout();
          return EMPTY;
        })
      );
  }

  logout(): Observable<IResponseDto> {
    return this.http
      .post<IResponseDto>(
        `${this.authBaseUrl}/auth/logout`,
        {},
        this.httpOptions
      )
      .pipe(
        tap(() => {
          this.deleteAuthInfoFromLocalStorage();
          this.onLogoutSubject.next('logout_success');
          this.router.navigate(['']);
        }),
        catchError((error) => {
          console.error('logout error', error);
          this.deleteAuthInfoFromLocalStorage();
          this.router.navigate(['']);
          return of({
            status: 'ERROR',
            message: 'Logout failed',
          } as IResponseDto);
        })
      );
  }

  getAuthToken(): { token: string; isExpired: boolean } | null {
    let token = localStorage.getItem('access_token');
    const userInfo = this.getUserInfo();

    if (!token || !userInfo) {
      return null;
    }

    const exp = userInfo.exp;
    const res = { token, isExpired: false };

    if (this.isTokenExpired(exp)) {
      res.isExpired = true;
    }

    return res;
  }

  getRefreshToken(): string | null {
    return localStorage.getItem('refresh_token');
  }

  getUserInfo(): ITokenValue | null {
    const userInfo = localStorage.getItem('userInfo');

    if (!userInfo) {
      return null;
    }

    try {
      return JSON.parse(userInfo) as ITokenValue;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  setAuthInfoToLocalStorage(
    auth: IAuthResponse,
    isFromTokenRefrechHandler = false
  ) {
    if (!auth.access_token || !auth.refresh_token) return;

    localStorage.setItem('access_token', auth.access_token);
    localStorage.setItem('refresh_token', auth.refresh_token);
    localStorage.setItem('token_type', auth.token_type);
    localStorage.setItem('expires_in', auth.expires_in.toString());

    let decodedUserInfo: ITokenValue | undefined = undefined;

    try {
      decodedUserInfo = jwtDecode(auth.access_token);
    } catch (err) {
      console.error('jwtDecode', err);
      this.logout();
      return;
    }

    if (!decodedUserInfo) {
      this.logout();
      return;
    }

    const { ...restInfo } = decodedUserInfo;

    try {
      localStorage.setItem('userInfo', JSON.stringify(restInfo));
      localStorage.setItem('user', JSON.stringify(auth.user));
    } catch (err) {
      console.error('Stringify userInfo', err);
      this.logout();
    }

    if (!isFromTokenRefrechHandler) {
      this.onLogin();
    }
  }

   deleteAuthInfoFromLocalStorage() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('token_type');
    localStorage.removeItem('expires_in');
    localStorage.removeItem('userInfo');
    localStorage.removeItem('user');
  }

  private isTokenExpired(expTimestamp: number) {
    const currentDate = DateTime.now().toSeconds();
    return currentDate >= expTimestamp;
  }

  isLoggedIn(): boolean {
    const tokenInfo = this.getAuthToken();
    return tokenInfo !== null && !tokenInfo.isExpired;
  }

  getCurrentUser(): any {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }
}
