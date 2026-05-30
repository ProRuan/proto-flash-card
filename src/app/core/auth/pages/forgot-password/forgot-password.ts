import { Component } from '@angular/core';
import { CoreFooter, CoreHeader } from '@core/components';

@Component({
  selector: 'app-forgot-password',
  imports: [CoreHeader, CoreFooter],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.scss',
})
export class ForgotPassword {}
