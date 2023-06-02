import { createAction, props } from '@ngrx/store';
import { GetProducts, Product } from 'src/app/shared/models';

export const GetProduct = createAction('[Product] Load Products', props<{ loading: true }>());

export const loadProductSuccess = createAction(
  '[Product API] Load Products Success',
  props<{ products: Product[] }>()
);
