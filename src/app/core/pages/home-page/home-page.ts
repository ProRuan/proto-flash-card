import { Component } from '@angular/core';

import { CoreFooter, CoreHeader } from '@core/components';
import { DeckCreator, DeckViewer } from '@modules/decks/pages';

@Component({
  selector: 'app-home-page',
  imports: [CoreHeader, DeckCreator, DeckViewer, CoreFooter],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {}
