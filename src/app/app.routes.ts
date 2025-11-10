import { Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration';

export const routes: Routes = [
  { path: '', redirectTo: '/registration', pathMatch: 'full' },
  { path: 'registration', component: RegistrationComponent }
];
