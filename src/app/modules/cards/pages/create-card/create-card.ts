import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { CoreFooter, CoreHeader } from '@core/components';
import { BasicCardData } from '@data/basic-card-data';

@Component({
  selector: 'app-create-card',
  imports: [ReactiveFormsModule, CoreHeader, CoreFooter],
  templateUrl: './create-card.html',
  styleUrl: './create-card.scss',
})
export class CreateCard {
  private route = inject(ActivatedRoute);
  private fb = inject(NonNullableFormBuilder);
  private sampleData = inject(BasicCardData);

  cards = this.sampleData.basicCards;

  form = this.fb.group({
    front: ['', [Validators.required, Validators.maxLength(500)]],
    back: ['', [Validators.required, Validators.maxLength(500)]],
    topic: ['', [Validators.required, Validators.maxLength(100)]],
    tags: ['', [Validators.maxLength(200)]],
    relationType: ['', [Validators.maxLength(50)]],
    relatedCardId: ['', [Validators.maxLength(50)]],
  });

  ngOnInit() {
    console.log('ngOnInit called in CreateCard');
    this.route.params.subscribe((params) => {
      const cardId = params['cardId'];
      console.log('cardId from route params:', cardId);
      if (cardId) {
        // Load card data for editing based on cardId
        // For now, we will just log the cardId
        console.log('Editing card with ID:', cardId);

        this.form.patchValue({
          front: this.cards[cardId || 1].front,
          back: this.cards[cardId || 1].back,
          topic: this.cards[cardId || 1].topic,
          tags: this.cards[cardId || 1].tags.join(', '),
          relationType: this.cards[cardId || 1].relationType,
          relatedCardId: this.cards[cardId || 1].relatedCardIDs.join(', '),
        });
      }
    });
  }

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

      this.sampleData.addCard({
        front: front || '',
        back: back || '',
        topic: topic || '',
        tags: tags ? tags.split(',').map((tag) => tag.trim()) : [],
        relationType: relationType || 'none',
        relatedCardIDs: relatedCardId ? relatedCardId.split(',').map((id) => id.trim()) : [],
      });

      // Reset form after submission
      this.form.reset();
      console.log('sampleData.basicCards after adding new card:', this.sampleData.basicCards);
    }
  }
}
