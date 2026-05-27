import { Component } from '@angular/core';

import { SAMPLE_DECK } from '@data/sample-deck';

@Component({
  selector: 'app-deck-viewer',
  imports: [],
  templateUrl: './deck-viewer.html',
  styleUrl: './deck-viewer.scss',
})
export class DeckViewer {
  readonly sampleDeck = SAMPLE_DECK;
}
