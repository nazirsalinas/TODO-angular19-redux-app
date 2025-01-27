import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppState } from '../../app.reducer';
import { Store } from '@ngrx/store';
import { crear } from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  imports: [ReactiveFormsModule ],
  templateUrl: './todo-add.component.html',
  styleUrl: './todo-add.component.scss'
})
export class TodoAddComponent {
  public txtInput = new FormControl('', { nonNullable: true, validators: [Validators.required] });

  constructor(
    private store: Store<AppState>
  ) {
    // txtInput = new FormControl('Hola', { nonNullable: true, validators: [Validators.required] });
    // this.store.select('todos').subscribe((palabra) => {
    //   // th
    // })
  }

  public agregar() {

    if (!this.txtInput.valid) {
      return;
    }

    this.store.dispatch(crear({texto:this.txtInput.value}))
    this.txtInput.reset();
    console.log(this.txtInput.value)
    console.log(this.txtInput.valid)
  }
}
