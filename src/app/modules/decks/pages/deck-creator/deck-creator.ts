import { Component } from '@angular/core';

@Component({
  selector: 'app-deck-creator',
  imports: [],
  templateUrl: './deck-creator.html',
  styleUrl: './deck-creator.scss',
})
export class DeckCreator {
  createDeck() {
    console.log('Creating deck...');
  }
}
