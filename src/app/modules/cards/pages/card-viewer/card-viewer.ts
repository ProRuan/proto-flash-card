import { Component, inject } from '@angular/core';

import { CoreFooter, CoreHeader } from '@core/components';
import { BasicCardData } from '@data/basic-card-data';
import { BasicCard } from '@modules/cards/interfaces';

@Component({
  selector: 'app-card-viewer',
  imports: [CoreHeader, CoreFooter],
  templateUrl: './card-viewer.html',
  styleUrl: './card-viewer.scss',
})
export class CardViewer {
  sampleData = inject(BasicCardData);

  cards: BasicCard[] = this.sampleData.basicCards;

  basicCard: BasicCard = this.cards[1];

  // basicCard: BasicCard = {
  //   front: 'What is the capital of France?',
  //   back: 'Paris',
  //   topic: 'Geography',
  //   tags: ['capital', 'country', 'Europe'],
  //   relationType: 'none',
  //   relatedCardIDs: [],
  // };
}
