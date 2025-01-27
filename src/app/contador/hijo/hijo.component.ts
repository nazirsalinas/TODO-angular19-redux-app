import { Component, OnInit } from '@angular/core';
import { NietoComponent } from "../nieto/nieto.component";
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import * as action from '../contador.actions';

@Component({
  selector: 'app-hijo',
  imports: [NietoComponent],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.scss'
})
export class HijoComponent implements OnInit {
  contador: number | undefined;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
     this.store.select('contador').subscribe( contador=>{
      this.contador = contador
     })
  }

  multiplicar() {
    this.store.dispatch(action.multiplicar({numero:2}))
  }
  dividir() {
    this.store.dispatch(action.dividir({numero:2}))
  }


}
