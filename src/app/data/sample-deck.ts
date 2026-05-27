import { SampleDeck } from '@modules/decks/interfaces';

export const SAMPLE_DECK: SampleDeck = {
  id: '1',
  name: 'Sample Deck',
  cards: [
    {
      id: '1',
      question: 'North in Indonesian is?',
      answer: 'Utara',
    },
    { id: '2', question: 'South in Indonesian is?', answer: 'Selatan' },
    { id: '3', question: 'East in Indonesian is?', answer: 'Timur' },
    { id: '4', question: 'West in Indonesian is?', answer: 'Barat' },
  ],
};
