import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    title: 'Login',
    path: '',
    loadComponent: () =>
      import('./authentication/login/login.component').then(
        (m) => m.LoginComponent
      ),
  },
];
