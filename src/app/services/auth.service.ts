import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../store/state/app.state';
import { UserSelector } from '../store/selectors/index.selectors';
import { Observable, filter, map, take, withLatestFrom } from 'rxjs';
import { AuthActions } from '../store/actions';
import { mapToStyles } from '@popperjs/core/lib/modifiers/computeStyles';
import { User } from '../shared/models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private store: Store<State>) {
    this.store
      .select(UserSelector.GetUser)
      .pipe(take(1))
      .subscribe(user => {
        if (!user) {
          // call to server
          this.store.dispatch(AuthActions.getUser());
        }
      });
  }

  get isLoggedIn(): Observable<boolean> {
    console.log('check Loggin');
    return this.store.select(UserSelector.getAuthLoading).pipe(
      filter(loading => !loading),
      withLatestFrom(this.store.select(UserSelector.GetUser)),
      take(1),
      map(([_loading, user]: [boolean, User]) => !!(!_loading && user && user.username))
    );
  }

  // get userName():
}
