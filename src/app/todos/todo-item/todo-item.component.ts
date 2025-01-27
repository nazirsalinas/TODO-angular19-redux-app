import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { Todo } from '../models/todo.models';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

import * as actions from '../todo.actions';


@Component({
  selector: 'app-todo-item',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss'
})
export class TodoItemComponent {
  @ViewChild('inputFisico') txtInputFisico: ElementRef | undefined;
  @Input() todo: Todo = {
    id:9999,
    texto:'',
    completado: true
  };

  chkCompletado: FormControl =  new FormControl(this.todo.completado);
  txtInput: FormControl = new FormControl(this.todo.texto, Validators.required)
  editando: boolean = false;

  constructor(
    private store: Store<AppState>
  ) {

  }

  ngOnInit() {
    // this.store.select('todos').subscribe((todos) => {
    //   console.log(todos)
    //   this.todos = todos; // th
    // })

    this.chkCompletado = new FormControl(this.todo.completado)
    this.txtInput = new FormControl(this.todo.texto, Validators.required)
    // this.todo.completado =

    this.chkCompletado.valueChanges.subscribe( valor => {
      this.store.dispatch( actions.toggle({ id: this.todo.id }) );
    });
  }

  editar() {

    this.editando = true;
    this.txtInput.setValue( this.todo.texto );

    setTimeout(() => {
      // this.txtInputFisico.nativeElement.select();
      if (this.txtInputFisico) {
        this.txtInputFisico.nativeElement.select();
      }
    }, 1);

  }

  terminarEdicion() {
    this.editando = false;

    if( this.txtInput.invalid ) { return; }
    if( this.txtInput.value === this.todo.texto ) { return; }


    this.store.dispatch(
      actions.editar({
        id: this.todo.id,
        texto: this.txtInput.value
      })
    );
  }

  borrarITem() {
    this.store.dispatch( actions.borrar({ id: this.todo.id }) );
  }

}
