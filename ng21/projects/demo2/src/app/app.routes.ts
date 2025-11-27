import { Routes } from '@angular/router';
import { MenuOption } from './core/types/menu-option';
import { TasksService } from './features/todo/services/tasks';
import { Time } from './core/services/time';

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
    path: 'todo',
    loadComponent: () => import('./features/todo/todo-page'),
    title: 'Todo | Demo1',
    data: {
      label: 'Tareas',
    },
    providers: [TasksService],
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about/about-page'),
    title: 'About | Demo1',
    data: {
      label: 'Acerca de',
    },
    providers: [Time],
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
