import { Component, inject } from '@angular/core';

import { CoreFooter, CoreHeader } from '@core/components';
import { BasicDeckData } from '@data/basic-deck-data';

@Component({
  selector: 'app-deck-lists',
  imports: [CoreHeader, CoreFooter],
  templateUrl: './deck-lists.html',
  styleUrl: './deck-lists.scss',
})
export class DeckLists {
  private sampleData = inject(BasicDeckData);

  decks = this.sampleData.basicDecks;

  ngOnInit() {
    console.log('DeckLists initialized with decks:', this.decks);
  }
}
