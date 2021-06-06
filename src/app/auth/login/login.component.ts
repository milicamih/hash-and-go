import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hidePassword = true;

  signInForm = new FormGroup({
    username: new FormControl('',
      [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6)],
    }),
  });

  constructor(private authService: AuthService) { }

  get f() { return this.signInForm.controls; }

  onLogin(): void {
    if (this.signInForm.valid) {
      this.authService.login(this.signInForm.value);
    }
  }
}
