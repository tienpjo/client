import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ApiService } from 'src/app/services/api.service';
import { ProductActions } from '../actions';
import { concatMap, map, mergeMap } from 'rxjs';
import { Product } from 'src/app/shared/models';

@Injectable()
export class ProductEffects {
  constructor(private actions$: Actions, private readonly apiService: ApiService) {}

  loadProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.GetProduct),
      mergeMap(() =>
        this.apiService
          .getProduct({ category: ['light'] })
          .pipe(map(res => ProductActions.loadProductSuccess({ products: res.products })))
      )
    );
  });
}
