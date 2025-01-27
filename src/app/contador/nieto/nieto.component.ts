import { Component, OnInit } from '@angular/core';
import { AppState } from '../../app.reducers';
import { Store } from '@ngrx/store';
import { reset } from '../contador.actions';

@Component({
  selector: 'app-nieto',
  imports: [],
  templateUrl: './nieto.component.html',
  styleUrl: './nieto.component.scss'
})
export class NietoComponent implements OnInit {
  contador: number | undefined

  constructor(
    private store: Store<AppState>
  ) {

  }

  ngOnInit() {
    this.store.select('contador').subscribe(contador => {
      this.contador = contador
    })
  }

  reset() {
    this.store.dispatch(reset())
  }

}
