import { Component } from '@angular/core';

import { CoreFooter, CoreHeader } from '@core/components';

@Component({
  selector: 'app-home-page',
  imports: [CoreHeader, CoreFooter],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {}
