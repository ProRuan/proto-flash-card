import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { CoreFooter, CoreHeader } from '@core/components';

@Component({
  selector: 'app-forgot-password',
  imports: [ReactiveFormsModule, CoreHeader, CoreFooter],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.scss',
})
export class ForgotPassword {
  fb = inject(NonNullableFormBuilder);

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email, Validators.maxLength(255)]],
  });

  onSubmit() {
    if (this.form.valid) {
      const { email } = this.form.value;
      // Handle forgot password logic here
      console.log('Forgot password request submitted:', email);
    }
  }
}
