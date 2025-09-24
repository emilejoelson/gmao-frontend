import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../authentication/data-access/services/auth.service';


export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  
  const tokenInfo = authService.getAuthToken();
  const userInfo = authService.getUserInfo();
  
  if (!tokenInfo || !tokenInfo.token || tokenInfo.isExpired || !userInfo) {
    // Clear any remaining auth data and redirect to login
    authService.deleteAuthInfoFromLocalStorage();
    router.navigate(['/login']);
    return false;
  }
  
  return true;
};