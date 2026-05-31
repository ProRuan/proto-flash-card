import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, NonNullableFormBuilder, Validators } from '@angular/forms';

import { CoreFooter, CoreHeader } from '@core/components';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CoreHeader, CoreFooter],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  fb = inject(NonNullableFormBuilder);

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email, Validators.maxLength(320)]],
    password: ['', [Validators.required, Validators.minLength(12), Validators.maxLength(128)]],
  });

  onSubmit() {
    if (this.form.valid) {
      const { email, password } = this.form.value;
      // Handle login logic here
      console.log('Email:', email);
      console.log('Password:', password);
    }
  }
}
