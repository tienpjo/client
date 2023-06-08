import { createAction, props } from '@ngrx/store';

export const SignIn = createAction('[Auth] User SignIn');

export const SignInSuccess = createAction('[Auth] User SignIn Success');

export const SignUp = createAction('[Auth] User SignUp');

export const SignUpSuccess = createAction('[Auth] User SignUp Success');

export const getUser = createAction('[Auth] Get User');

export const addUser = createAction('[Auth] Add User');
