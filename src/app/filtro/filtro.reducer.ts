import { createReducer, on, Action } from '@ngrx/store';
import { setFiltro, filtrosValidos } from './filtro.actions';

// Estado inicial definido como filtrosValidos
export const initialState: filtrosValidos = 'todos';

const _filtroReducer = createReducer<filtrosValidos, Action>(
  initialState,
  on(setFiltro, (state, { filtro }) => filtro) // Especifica que el retorno es del tipo filtrosValidos
);

// Especifica el tipo del estado y la acción
export function filtroReducer(state: filtrosValidos | undefined, action: any): filtrosValidos {
  return _filtroReducer(state, action); // Usa el estado inicial si es undefined
}
