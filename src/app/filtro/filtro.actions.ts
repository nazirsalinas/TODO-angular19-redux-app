import { createAction, props } from '@ngrx/store';

export type filtrosValidos = 'todos' | 'completados' | 'pendientes';

export const setFiltro = createAction(
  '[Filtro] Set Filtro',
  props<{ filtro: filtrosValidos }>() // Asegúrate de que el payload sea del tipo correcto
);
