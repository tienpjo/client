import { createReducer, on } from '@ngrx/store';
import { Category, Product } from 'src/app/shared/models';
import { ProductActions } from '../actions';
import { ActionReducer, MetaReducer } from '@ngrx/store';

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
  on(ProductActions.loadProductSuccess, (state, action): ProductState => {
    return {
      ...state,
      products: action.products,
    };
  })
);

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state, action) {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}
export const metaReducers: MetaReducer<any>[] = [debug];
