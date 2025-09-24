import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../authentication/data-access/services/auth.service';


export const notAuthGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  
  const tokenInfo = authService.getAuthToken();
  const userInfo = authService.getUserInfo();
  
  if (tokenInfo && tokenInfo.token && !tokenInfo.isExpired && userInfo) {
    router.navigate(['/workspace']);
    return false;
  }
  
  if (tokenInfo && tokenInfo.isExpired) {
    authService.deleteAuthInfoFromLocalStorage();
  }
  
  return true;
};