import { Injectable } from '@angular/core';

import { BasicDeck } from '@modules/decks/interfaces';

@Injectable({
  providedIn: 'root',
})
export class BasicDeckData {
  basicDecks: BasicDeck[] = [];

  constructor() {
    this.basicDecks = [
      {
        name: 'Basic Deck 1',
        category: 'Category 1',
        cards: [
          {
            front: 'What is the capital of France?',
            back: 'Paris',
            topic: 'Geography',
            tags: ['capital', 'country'],
            relationType: 'none',
            relatedCardIDs: [],
          },
          {
            front: 'What is the largest planet in our solar system?',
            back: 'Jupiter',
            topic: 'Astronomy',
            tags: ['planet', 'solar system'],
            relationType: 'none',
            relatedCardIDs: [],
          },
        ],
      },
      {
        name: 'Basic Deck 2',
        category: 'Category 2',
        cards: [
          {
            front: 'What is the chemical symbol for water?',
            back: 'H2O',
            topic: 'Chemistry',
            tags: ['chemical symbol', 'compound'],
            relationType: 'none',
            relatedCardIDs: [],
          },
          {
            front: 'Who wrote "To Kill a Mockingbird"?',
            back: 'Harper Lee',
            topic: 'Literature',
            tags: ['author', 'novel'],
            relationType: 'none',
            relatedCardIDs: [],
          },
        ],
      },
      { name: 'Basic Deck 3', category: 'Category 3', cards: [] },
    ];
  }
}
