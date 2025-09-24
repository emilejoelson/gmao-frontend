import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../authentication/data-access/services/auth.service';

export const redirectGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  
  const tokenInfo = authService.getAuthToken();
  const userInfo = authService.getUserInfo();
  
  // If user is authenticated, go to workspace
  if (tokenInfo && tokenInfo.token && !tokenInfo.isExpired && userInfo) {
    router.navigate(['/workspace']);
  } else {
    // If not authenticated, go to login
    router.navigate(['']);
  }
  
  return false;
};