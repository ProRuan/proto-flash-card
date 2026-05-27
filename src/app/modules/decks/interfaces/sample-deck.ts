import { SampleCard } from '@modules/cards/interfaces';

export interface SampleDeck {
  id: string;
  name: string;
  cards: SampleCard[];
}
