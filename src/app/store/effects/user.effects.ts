import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ApiService } from 'src/app/services/api.service';
import { AuthActions } from '../actions';
import { exhaustMap, map, mergeMap } from 'rxjs';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private readonly apiService: ApiService) {}

  signIn$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.SignIn),
      exhaustMap(action =>
        this.apiService.signIn(action).pipe(map(res => AuthActions.SignInSuccess({ user: res })))
      )
    );
  });

  getUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.getUser),
      mergeMap(() => this.apiService.getUser().pipe(map(res => AuthActions.getUserSuccess({ user: res }))))
    );
  });
}
