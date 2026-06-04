import { Injectable } from '@angular/core';

import { BasicCard } from '@modules/cards/interfaces';

@Injectable({
  providedIn: 'root',
})
export class BasicCardData {
  basicCards: BasicCard[] = [
    {
      front: 'What is the capital of France?',
      back: 'Paris',
      topic: 'Geography',
      tags: ['capital', 'country', 'Europe'],
      relationType: 'none',
      relatedCardIDs: [],
    },
    {
      front: 'What is the largest planet in our solar system?',
      back: 'Jupiter',
      topic: 'Astronomy',
      tags: ['planet', 'solar system', 'largest'],
      relationType: 'none',
      relatedCardIDs: [],
    },
  ];
}
