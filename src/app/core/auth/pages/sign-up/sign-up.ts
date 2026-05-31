import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { passwordMatchValidator } from '@core/auth/validators';

import { CoreFooter, CoreHeader } from '@core/components';

@Component({
  selector: 'app-sign-up',
  imports: [ReactiveFormsModule, CoreHeader, CoreFooter],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.scss',
})
export class SignUp {
  fb = inject(NonNullableFormBuilder);

  form = this.fb.group(
    {
      name: ['', [Validators.required, Validators.maxLength(100)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(320)]],
      password: ['', [Validators.required, Validators.minLength(12), Validators.maxLength(128)]],
      confirmPassword: [
        '',
        [Validators.required, Validators.minLength(12), Validators.maxLength(128)],
      ],
    },
    { validators: passwordMatchValidator() },
  );

  onSubmit() {
    if (this.form.valid) {
      const { name, email, password, confirmPassword } = this.form.value;
      // Handle sign-up logic here
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Password:', password);
      console.log('Confirm Password:', confirmPassword);
    }
  }
}
