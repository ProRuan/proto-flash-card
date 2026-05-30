import { Component } from '@angular/core';
import { CoreFooter, CoreHeader } from '@core/components';

@Component({
  selector: 'app-reset-password',
  imports: [CoreHeader, CoreFooter],
  templateUrl: './reset-password.html',
  styleUrl: './reset-password.scss',
})
export class ResetPassword {}
