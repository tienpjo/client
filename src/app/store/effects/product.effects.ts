import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ApiService } from 'src/app/services/api.service';
import { ProductActions } from '../actions';
import { map, mergeMap, switchMap } from 'rxjs';

@Injectable()
export class ProductEffects {
  constructor(private actions$: Actions, private readonly apiService: ApiService) {}

  loadProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.GetProduct),
      mergeMap(() =>
        this.apiService
          .getProduct({})
          .pipe(map(res => ProductActions.loadProductSuccess({ products: res.products })))
      )
    );
  });

  loadCategories$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.getCategories),
      mergeMap(() =>
        this.apiService
          .getCategories()
          .pipe(map(res => ProductActions.getCategoriesSuccess({ categories: res })))
      )
    );
  });

  getCart$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.getCart),
      mergeMap(() => this.apiService.getCart().pipe(map(res => ProductActions.getCartSuccess({ cart: res }))))
    );
  });

  addToCart$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.addProductToCart),
      switchMap(action =>
        this.apiService.addToCart(action.id).pipe(map(res => ProductActions.addToCartSuccess({ id: res })))
      )
    );
  });
}
