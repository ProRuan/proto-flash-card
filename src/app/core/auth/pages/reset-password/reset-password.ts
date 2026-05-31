import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { passwordMatchValidator } from '@core/auth/validators';
import { CoreFooter, CoreHeader } from '@core/components';

@Component({
  selector: 'app-reset-password',
  imports: [ReactiveFormsModule, CoreHeader, CoreFooter],
  templateUrl: './reset-password.html',
  styleUrl: './reset-password.scss',
})
export class ResetPassword {
  fb = inject(NonNullableFormBuilder);

  form = this.fb.group(
    {
      email: ['', [Validators.required, Validators.email, Validators.maxLength(255)]],
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
      const { email, password, confirmPassword } = this.form.value;
      // Handle reset password logic here
      console.log('Email:', email);
      console.log('Password:', password);
      console.log('Confirm Password:', confirmPassword);
    }
  }
}
