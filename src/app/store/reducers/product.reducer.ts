import { Action, createReducer, on } from '@ngrx/store';
import { Category, GetProducts, Product } from 'src/app/shared/models';
import { ProductActions } from '../actions';
import { ActionReducer, MetaReducer } from '@ngrx/store';
import * as AppState from './../state/app.state';
import { GetProduct } from '../actions/product.action';
import { state } from '@angular/animations';

export interface State extends AppState.State {
  products: ProductState;
}

export const keyProductState = 'products';

export interface ProductState {
  products: Product[];
  loadingProducts: boolean;
  categories?: Array<Category>;
  loading: boolean;
  //
}

const initialState: ProductState = {
  products: [],
  loading: false,
  loadingProducts: false,
};
export const productReducer = createReducer<ProductState>(
  initialState,
  on(ProductActions.GetProduct, (state, action): ProductState => {
    return {
      ...state,
      loading: true,
    };
  }),

  on(ProductActions.loadProductSuccess, (state, action): ProductState => {
    return {
      ...state,
      loading: false,
      products: action.products,
    };
  })
);
