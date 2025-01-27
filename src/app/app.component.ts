import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HijoComponent } from "./contador/hijo/hijo.component";
import { Store } from '@ngrx/store';
import * as actions from './contador/contador.actions';
import { initialState } from './contador/contador.reducer';
import { AppState } from './app.reducers';
import { FooterComponent } from "./footer/footer.component";
import { TodoPageComponent } from "./todos/todo-page/todo-page.component";

@Component({
  selector: 'app-root',
  imports: [FooterComponent, TodoPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public contador: number= initialState;

  constructor(
    private store: Store<AppState>
  ) {
    this.store.select('contador').subscribe(contador => {
      this.contador= contador;

    })
  }

  incrementar() {
    // this.contador++
    this.store.dispatch( actions.incrementar())
  }
  decrementar() {
    // this.contador--
    this.store.dispatch(actions.decrementar())

  }
}
