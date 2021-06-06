import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.scss'],
})
export class SingUpComponent {
  hidePassword = true;
  PhoneRegex = '^\\+[0-9]{6,14}$';

  signUpForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    username: new FormControl('',
      [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.pattern(this.PhoneRegex)]),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6)],
    }),
  });

  constructor(private authService: AuthService) {}

  get f() { return this.signUpForm.controls; }

  onSingUp(): void {
    if (this.signUpForm.valid) {
      this.authService.singIn(this.signUpForm.value);
    }
  }

  addPrefix() {
    this.signUpForm.controls.phone.patchValue('+381');
  }
}
