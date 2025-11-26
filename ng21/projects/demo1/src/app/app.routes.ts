import { Routes } from '@angular/router';
import { MenuOption } from './core/types/menu-option';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
   loadComponent: () => import('./features/home/home-page'),
    title: 'Home | Demo1',
    data: {
      label: 'Inicio',
    },
  },
  {
    path: 'counters',
    loadComponent: () => import('./features/counters/counters-page'),
    title: 'Counters | Demo1',
    data: {
      label: 'Contadores',
    },
  },
  {
    path: 'proofs',
    loadComponent: () => import('./features/proofs/proofs-page'),
    title: 'Proofs | Demo1',
    data: {
      label: 'Pruebas',
    },
  },
  {
    path: 'todo',
    loadComponent: () => import('./features/todo/todo-page'),
    title: 'Todo | Demo1',
    data: {
      label: 'Tareas',
    },
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about/about-page'),
    title: 'About | Demo1',
    data: {
      label: 'Acerca de',
    },
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

export const menuOptions: MenuOption[] = routes
  .filter((route) => route.data && route.data['label'])
  .map((route) => ({
    label: route.data!['label'],
    path: route.path || '',
  }));
