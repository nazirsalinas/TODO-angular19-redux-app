import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './models/todo.models';
import { filtrosValidos } from '../filtro/filtro.actions';

@Pipe({
  name: 'filtroTodo'
})
export class FiltroPipe implements PipeTransform {

  transform(todos: Todo[],  filtro: filtrosValidos): Todo[] {
    if (!todos || !filtro) {
      return todos;
    }
    return todos.filter(todo => {
      // Filtra según la lógica deseada
      if (filtro === 'completados') {
        return todo.completado;
      } else if (filtro === 'pendientes') {
        return !todo.completado;
      }
      return true; // Para 'all'
    });
  }
}
