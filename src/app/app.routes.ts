import { Routes } from '@angular/router';
import { authGuard } from './shared/guards/auth.guard';
import { notAuthGuard } from './shared/guards/no-auth.guard';

export const routes: Routes = [
  {
    title: '',
    path: '',
    canActivate: [notAuthGuard],
    loadComponent: () =>
      import('./authentication/login/login.component').then(
        (m) => m.LoginComponent
      ),
  },
  {
    title: 'Dashboard',
    path: 'workspace',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];