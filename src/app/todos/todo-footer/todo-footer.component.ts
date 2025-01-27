import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../../filtro/filtro.actions';
import { CommonModule } from '@angular/common';
import { borrarCompletados } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  imports: [CommonModule],
  templateUrl: './todo-footer.component.html',
  styleUrl: './todo-footer.component.scss'
})
export class TodoFooterComponent {

  filtroActual: actions.filtrosValidos = 'todos';
  filtros: actions.filtrosValidos[] = ['todos','completados','pendientes'];

  pendientes: number = 0;


  constructor( private store: Store<AppState> ) { }

  ngOnInit(): void {

    // this.store.select('filtro')
    //   .subscribe( filtro => this.filtroActual = filtro );
    this.store.subscribe( state => {

      this.filtroActual = state.filtro;
      this.pendientes   = state.todos.filter( todo => !todo.completado ).length;

    });

  }

  cambiarFiltro( filtro: actions.filtrosValidos ) {

    this.store.dispatch( actions.setFiltro({ filtro }) );

  }

  borrarCompletados(): void {
    this.store.dispatch(borrarCompletados())
  }
}
