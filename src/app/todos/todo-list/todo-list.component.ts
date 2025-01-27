import { Component, OnInit } from '@angular/core';
import { TodoItemComponent } from "../todo-item/todo-item.component";
import { Todo } from '../models/todo.models';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { CommonModule } from '@angular/common';
import { FiltroPipe } from "../filtro.pipe";
import { filtrosValidos } from '../../filtro/filtro.actions';

@Component({
  selector: 'app-todo-list',
  imports: [TodoItemComponent, CommonModule, FiltroPipe],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];
  filtroActual: filtrosValidos = 'todos';
  constructor(
    private store: Store<AppState>
  ) {

  }

  ngOnInit() {
    // this.store.select('todos').subscribe(todos => {
    //   console.log(todos)
    //   this.todos = todos;
    // })

    this.store.subscribe( ({ todos, filtro }) => {

      this.todos        = todos;
      this.filtroActual = filtro;

    });
  }

}
