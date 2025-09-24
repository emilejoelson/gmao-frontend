import {
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { EMPTY, switchMap, catchError } from 'rxjs';

import { inject } from '@angular/core';
import { AuthService } from '../../authentication/data-access/services/auth.service';

function requestWithToken(
  req: HttpRequest<any>,
  token: string
): HttpRequest<any> {
  return req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`,
    },
  });
}

function handleExpiredToken(
  req: HttpRequest<any>,
  authService: AuthService,
  next: HttpHandlerFn
) {
  const refreshToken = authService.getRefreshToken();

  if (!refreshToken) {
    authService.logout();
    return EMPTY;
  }

  return authService.tokenRefrechHandler(refreshToken).pipe(
    switchMap((res) => {
      const accessToken = res.access_token;

      if (!accessToken) {
        authService.logout();
        return EMPTY;
      }

      return next(requestWithToken(req, accessToken));
    }),
    catchError((error) => {
      console.error('Token refresh failed:', error);
      authService.logout();
      return EMPTY;
    })
  );
}

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);

  if (req.url.includes('/signup')) {
    return next(req);
  }

  if (
    !new RegExp(`^.*${authService.authBaseUrl}/auth/login.*$`).test(req.url) &&
    !new RegExp(`^.*${authService.authBaseUrl}/auth/refresh.*$`).test(req.url)
  ) {
    const tokenInfo = authService.getAuthToken();

    if (tokenInfo) {
      const isTokenExpired = tokenInfo.isExpired;
      const token = tokenInfo.token;

      if (isTokenExpired) {
        return handleExpiredToken(req, authService, next);
      }

      return next(requestWithToken(req, token));
    } else {
      authService.logout();
      return EMPTY;
    }
  }
  return next(req);
};