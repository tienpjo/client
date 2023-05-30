import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ApiService } from 'src/app/services/api.service';
import { ProductActions } from '../actions';
import { concatMap, map } from 'rxjs';

@Injectable()
export class ProductEffects {
  constructor(private actions$: Actions, private readonly apiService: ApiService) {}

  loadProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.GetProducts),
      concatMap(() =>
        this.apiService.getProduct().pipe(map(products => ProductActions.loadProductSuccess(products)))
      )
    );
  });
}
