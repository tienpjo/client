import { User } from 'src/app/shared/models';
import * as AppState from './../state/app.state';
import { createReducer, on } from '@ngrx/store';
import * as UserAction from '../actions/auth.action';
import { state } from '@angular/animations';
export interface State extends AppState.State {}

export interface UserState {
  loading: boolean;
  user: User;
}

export const initialState: UserState = {
  loading: false,
  user: null,
};

export const userReducer = createReducer(
  initialState,
  on(UserAction.SignIn, (state): UserState => {
    return {
      ...state,
      loading: true,
    };
  }),
  //TODO: fix reducer below
  on(UserAction.addUser, (state): UserState => {
    return {
      ...state,
    };
  }),

  on(UserAction.getUser, (state): UserState => {
    return {
      ...state,
    };
  }),

  on(UserAction.SignInSuccess, (state): UserState => {
    return {
      ...state,
    };
  })
);
