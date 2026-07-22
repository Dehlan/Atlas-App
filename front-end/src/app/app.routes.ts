import { Routes } from '@angular/router';
import { AppShell } from './pages/app-shell/app-shell';
import { Home } from './pages/home/home';

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
