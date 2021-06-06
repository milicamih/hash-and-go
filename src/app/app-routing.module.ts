import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingUpComponent } from './auth/sing-up/sing-up.component';
import { LoginComponent } from './auth/login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { LayoutComponent } from './layout/layout.component';
import { AuthGuardService } from './auth/auth-guard.service';
import {ProfileComponent} from './profile/profile.component';


const routes: Routes = [
  {
    path: 'sing-up',
    component: SingUpComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: 'payment',
        component: PaymentComponent,
      },
      {
        path: 'account',
        component: ProfileComponent,
      }
    ],
  },
  {
    path: '**',
    redirectTo: 'payment',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
