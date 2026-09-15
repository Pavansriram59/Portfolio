import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home.component').then((m) => m.HomeComponent),
    title: 'PAVAN // PLAYER 01 — Frontend Engineer',
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
