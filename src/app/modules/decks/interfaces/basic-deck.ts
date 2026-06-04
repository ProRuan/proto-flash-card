import { BasicCard } from '@modules/cards/interfaces';

export interface BasicDeck {
  name: string;
  category: string;
  cards: BasicCard[];
}
