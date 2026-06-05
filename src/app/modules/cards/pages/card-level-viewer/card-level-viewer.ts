import { Component } from '@angular/core';

import { CoreFooter, CoreHeader } from '@core/components';
import { StudyableCard } from '@modules/cards/interfaces';

@Component({
  selector: 'app-card-level-viewer',
  imports: [CoreHeader, CoreFooter],
  templateUrl: './card-level-viewer.html',
  styleUrl: './card-level-viewer.scss',
})
export class CardLevelViewer {
  cards: StudyableCard[] = [
    {
      front: 'What is the capital of France?',
      back: 'Paris',
      studyLevel: 2,
      topic: 'Geography',
      tags: ['capital', 'europe'],
      relationType: 'related',
      relatedCardIDs: ['card1', 'card3'],
    },
    {
      front: 'What is the largest planet in our solar system?',
      back: 'Jupiter',
      studyLevel: 1,
      topic: 'Astronomy',
      tags: ['planet', 'solar-system'],
      relationType: 'related',
      relatedCardIDs: ['card2', 'card4'],
    },
    {
      front: 'What is the chemical symbol for water?',
      back: 'H2O',
      studyLevel: 3,
      topic: 'Chemistry',
      tags: ['molecule', 'compound'],
      relationType: 'related',
      relatedCardIDs: ['card5'],
    },
  ];

  getCardLevelColor(level: number): string {
    switch (level) {
      case 1:
        return 'red';
      case 2:
        return 'orange';
      case 3:
        return 'green';
      default:
        return 'gray';
    }
  }
}
