import { Component, Injector, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductActions } from './store/actions';
import { State } from './store/reducers/product.reducer';

@Component({
  selector: 'app-shop-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'client';
  constructor(private store: Store<State>, private injector: Injector) {}
  ngOnInit(): void {
    this.store.dispatch(ProductActions.GetProduct({ loading: true }));
    this.store.dispatch(ProductActions.getCategories({ loading: true }));
  }
}
