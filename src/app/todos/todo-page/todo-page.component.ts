import { Component } from '@angular/core';
import { TodoAddComponent } from "../todo-add/todo-add.component";
import { TodoListComponent } from "../todo-list/todo-list.component";
import { TodoFooterComponent } from "../todo-footer/todo-footer.component";
import { AppState } from '../../app.reducer';
import { Store } from '@ngrx/store';
import { toggleAll } from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  imports: [TodoAddComponent, TodoListComponent, TodoFooterComponent],
  templateUrl: './todo-page.component.html',
  styleUrl: './todo-page.component.scss'
})
export class TodoPageComponent {
  completado: boolean = false

  constructor( private store: Store<AppState>) {

  }

  toggleAll() {
    this.completado = !this.completado
    console.log(this.completado)
    this.store.dispatch(toggleAll({completado: this.completado}))

  }

}
