import { ApplicationConfig, isDevMode, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { contadorReducer } from './contador/contador.reducer';
import { environment } from '../../environments/environment';
import { todoReducer } from './todos/todo-reducers';
import { filtroReducer } from './filtro/filtro.reducer';
import { appReducers } from './app.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideStore(appReducers), // Proveer el store
    provideEffects(), // Proveer efectos
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    !environment.production ? provideStoreDevtools() : [], // Proveer devtools si no está en producción

    provideStoreDevtools({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
      connectInZone: true // If set to true, the connection is established within the Angular zone
    })
  ]
};
