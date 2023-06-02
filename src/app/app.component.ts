import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
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
  product: any;
  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.store.dispatch(ProductActions.GetProduct({ loading: true }));
  }
}
