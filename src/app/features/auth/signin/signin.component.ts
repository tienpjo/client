import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthActions } from 'src/app/store/actions';
import { State } from 'src/app/store/state/app.state';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  errorMessage = '';
  pageTitle = 'Sign In';

  signInForm: FormGroup;
  constructor(private fb: FormBuilder, private store: Store<State>) {}

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  signIn(): void {
    this.store.dispatch(AuthActions.SignIn(this.signInForm.value));
    this.signInForm.reset();
  }
}
