import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { CoreFooter, CoreHeader } from '@core/components';

@Component({
  selector: 'app-create-card',
  imports: [ReactiveFormsModule, CoreHeader, CoreFooter],
  templateUrl: './create-card.html',
  styleUrl: './create-card.scss',
})
export class CreateCard {
  fb = inject(NonNullableFormBuilder);

  form = this.fb.group({
    front: ['', [Validators.required, Validators.maxLength(500)]],
    back: ['', [Validators.required, Validators.maxLength(500)]],
    topic: ['', [Validators.required, Validators.maxLength(100)]],
    tags: ['', [Validators.maxLength(200)]],
    relationType: ['', [Validators.maxLength(50)]],
    relatedCardId: ['', [Validators.maxLength(50)]],
  });

  onSubmit() {
    if (this.form.valid) {
      const { front, back, topic, tags, relationType, relatedCardId } = this.form.value;
      // Handle create card logic here
      console.log('Front:', front);
      console.log('Back:', back);
      console.log('Topic:', topic);
      console.log('Tags:', tags);
      console.log('Relation Type:', relationType);
      console.log('Related Card ID:', relatedCardId);
    }
  }
}
