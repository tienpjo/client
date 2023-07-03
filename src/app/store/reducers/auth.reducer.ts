import { User } from 'src/app/shared/models';
import * as AppState from './../state/app.state';
import { createReducer, on } from '@ngrx/store';
import * as UserAction from '../actions/auth.action';
export interface State extends AppState.State {
  users: UserState;
}

export const keyAuthState = 'auth';
export interface UserState {
  loading: boolean;
  userInfo: User;
}

export const initialState: UserState = {
  loading: false,
  userInfo: null,
};

export const userReducer = createReducer(
  initialState,
  on(UserAction.SignIn, (state): UserState => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(UserAction.SignInSuccess, (state, action): UserState => {
    return {
      ...state,
      userInfo: action.user,
      loading: false,
    };
  }),
  //TODO: fix reducer below
  on(UserAction.StoreUser, (state): UserState => {
    return {
      ...state,
    };
  }),

  on(UserAction.getUser, (state): UserState => {
    return {
      ...state,
    };
  })
);
