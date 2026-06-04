import { Routes } from '@angular/router';

import { ForgotPassword, Login, ResetPassword, SignUp } from '@core/auth/pages';
import { CreateCard } from '@modules/cards/pages';
import { CreateDeck } from '@modules/decks/pages';

export const routes: Routes = [
  { path: '', component: Login },
  { path: 'sign-up', component: SignUp },
  { path: 'forgot-password', component: ForgotPassword },
  { path: 'reset-password', component: ResetPassword },
  { path: 'create-deck', component: CreateDeck },
  { path: 'create-card', component: CreateCard },
  {
    path: 'card-viewer',
    loadComponent: () => import('@modules/cards/pages').then((m) => m.CardViewer),
  },
  {
    path: 'card-editor',
    loadComponent: () => import('@modules/cards/pages').then((m) => m.CreateCard),
  },
];
