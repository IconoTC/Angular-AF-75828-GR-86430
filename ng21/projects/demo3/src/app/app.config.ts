import { ApplicationConfig, InjectionToken, LOCALE_ID, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import localeES from '@angular/common/locales/es'

registerLocaleData(localeES);

import { routes } from './app.routes';
import { registerLocaleData } from '@angular/common';

export const TITLE = new InjectionToken<string>('App Title');


export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    {
      provide: LOCALE_ID,
      useValue: 'es-ES'
    },
    {
      provide: TITLE,
      useValue: 'Demo3 - Angular Indra'
    }
  ]
};
