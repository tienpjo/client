import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/shared/models';

export const GetProducts = createAction('[Product] Get Products');

export const loadProductSuccess = createAction(
  '[Product API] Load Products Success',
  props<{ products: Product[] }>()
);
