import { Component } from '@angular/core';

import { CoreFooter, CoreHeader } from '@core/components';

@Component({
  selector: 'app-login',
  imports: [CoreHeader, CoreFooter],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {}
