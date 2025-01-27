import { filtrosValidos } from './filtro/filtro.actions';
import { ActionReducerMap } from "@ngrx/store";
import { Todo } from "./todos/models/todo.models";
import { todoReducer } from "./todos/todo-reducers";
import { filtroReducer } from "./filtro/filtro.reducer";
import { contadorReducer } from './contador/contador.reducer';

export interface AppState {
  todos: Todo[],
  filtro: filtrosValidos,
  contador: number;
  // filtro: filtrosValidos
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filtro:filtroReducer,
  contador: contadorReducer
}
