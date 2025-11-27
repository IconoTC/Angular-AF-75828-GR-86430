import { Routes } from '@angular/router';
import { MenuOption } from './core/types/menu-option';
import { Time } from './core/services/time';
import { InjectionToken } from '@angular/core';
import { InMemoryTasksRepoRx } from './features/todo/services/in-memory-tasks-repo-rx';
import { LocalTasksRepoRx } from './features/todo/services/local-tasks-repo-rx';
import { RepoRx } from './core/types/repo';
import { Task, TaskDTO } from './features/todo/types/task';

export const TasksRepoRx = new InjectionToken<RepoRx<Task, TaskDTO>>('TaskRepo');
//export const TasksRepoRx = new InjectionToken<InMemoryTasksRepoRx>('TaskRepo');

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
    providers: [
      {
        provide: TasksRepoRx,
        useFactory: () => {
          const n = Math.random();
          if (n > 1) {
            console.log('Using LocalTasksRepoRx');
            return new InMemoryTasksRepoRx();
          } else {
            console.log('Using LocalTasksRepoRx');
            return new LocalTasksRepoRx();
          }
        },
        //useClass: InMemoryTasksRepoRx
      },
    ],
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
