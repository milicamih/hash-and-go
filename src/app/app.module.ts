import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/modules/material.module';
import { AnQrcodeModule } from 'an-qrcode';
// COMPONENTS
import { AppComponent } from './app.component';
import { AuthWrapperComponent } from './auth/auth-wrapper/auth-wrapper.component';
import { SingUpComponent } from './auth/sing-up/sing-up.component';
import { LoginComponent } from './auth/login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { LayoutComponent } from './layout/layout.component';
import { ProfileComponent } from './profile/profile.component';
import { GuidingComponent } from './guiding/guiding.component';
import {NgCircleProgressModule} from 'ng-circle-progress';


@NgModule({
  declarations: [
    AppComponent,
    AuthWrapperComponent,
    SingUpComponent,
    LoginComponent,
    PaymentComponent,
    LayoutComponent,
    ProfileComponent,
    GuidingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    AnQrcodeModule,
    NgCircleProgressModule.forRoot()
  ],
  entryComponents: [GuidingComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
