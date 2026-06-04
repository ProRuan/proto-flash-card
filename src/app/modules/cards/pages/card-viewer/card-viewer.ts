import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  private route = inject(ActivatedRoute);
  private sampleData = inject(BasicCardData);

  cards: BasicCard[] = this.sampleData.basicCards;

  basicCard: BasicCard = this.cards[1];

  ngOnInit() {
    console.log('ngOnInit called in CardViewer');
    this.route.params.subscribe((params) => {
      const cardId = params['cardId'];
      console.log('cardId from route params:', cardId);
      if (cardId) {
        const foundCard = this.cards[cardId];
        if (foundCard) {
          this.basicCard = foundCard;
        } else {
          this.basicCard = this.cards[1];
        }
      }
    });
  }
}
