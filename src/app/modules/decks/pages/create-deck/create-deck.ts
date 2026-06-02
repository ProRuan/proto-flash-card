import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { CoreFooter, CoreHeader } from '@core/components';

@Component({
  selector: 'app-create-deck',
  imports: [ReactiveFormsModule, CoreHeader, CoreFooter],
  templateUrl: './create-deck.html',
  styleUrl: './create-deck.scss',
})
export class CreateDeck {
  fb = inject(NonNullableFormBuilder);

  form = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(100)]],
    category: ['', [Validators.required, Validators.maxLength(50)]],
  });

  onSubmit() {
    if (this.form.valid) {
      const { name, category } = this.form.value;
      // Handle create deck logic here
      console.log('Name:', name);
      console.log('Category:', category);
    }
  }
}
