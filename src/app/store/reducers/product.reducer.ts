import { createReducer, on } from '@ngrx/store';
import { Cart, Category, Product } from 'src/app/shared/models';
import { ProductActions } from '../actions';
import * as AppState from './../state/app.state';
import * as localStorage from '../storage';
import { state } from '@angular/animations';
export interface State extends AppState.State {
  products: ProductState;
}

export const keyProductState = 'products';

export interface ProductState {
  products: Product[];
  loadingProducts: boolean;
  categories: Category[];
  loading: boolean;
  cart: Cart;
}

const initialState: ProductState = {
  products: [],
  categories: [],
  loading: false,
  loadingProducts: false,
  cart: localStorage.getItem('product'),
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
  }),

  on(ProductActions.getCategories, (state, action): ProductState => {
    return {
      ...state,
      loading: true,
    };
  }),

  on(ProductActions.getCategoriesSuccess, (state, action): ProductState => {
    return {
      ...state,
      categories: action.categories,
    };
  }),

  on(ProductActions.addToCartSuccess, (state, action): ProductState => {
    return {
      ...state,
      cart: action.id,
    };
  }),

  on(ProductActions.getCartSuccess, (state, action): ProductState => {
    return {
      ...state,
      cart: action.cart,
    };
  })
);
