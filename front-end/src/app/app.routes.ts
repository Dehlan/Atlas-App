import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import("./pages/app-shell/app-shell").then(c => c.AppShell),
    title: 'Atlas',
    children: [
      {
        path: '',
        loadComponent: () => import("./pages/home/home").then(c => c.Home)
      }
    ]
  }
];
