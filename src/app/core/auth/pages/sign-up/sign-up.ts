import { Component } from '@angular/core';
import { CoreFooter, CoreHeader } from '@core/components';

@Component({
  selector: 'app-sign-up',
  imports: [CoreHeader, CoreFooter],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.scss',
})
export class SignUp {}
