import { createAction, props } from '@ngrx/store';
import { Category, Product } from 'src/app/shared/models';

export const GetProduct = createAction('[Product] Load Products', props<{ loading: true }>());

export const loadProductSuccess = createAction(
  '[Product API] Load Products Success',
  props<{ products: Product[] }>()
);

export const getCart = createAction('[Product] Get Cart');
export const getCartSuccess = createAction('[Product] Get Cart Success', props<{ cart: any }>());

export const addProductToCart = createAction('[Product] Add Product To Cart', props<{ id: any }>());

export const addToCartSuccess = createAction('[Product] Add Product To Cart Success', props<{ id: any }>());

export const getCategories = createAction('[Categories] Load Categories', props<{ loading: true }>());

export const getCategoriesSuccess = createAction(
  '[Categories] Load Categories Success',
  props<{ categories: Category[] }>()
);
