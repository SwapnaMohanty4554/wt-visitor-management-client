import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VisitorComponent } from '../components/visitor/visitor.component';
import { ThankyouComponent } from '../sharedModules/thankyou/thankyou.component';
import { VisitorSignInComponent } from '../components/visitor-sign-in/visitor-sign-in.component';
// import { NgxOtpInputModule } from 'ngx-otp-input';

@NgModule({
  declarations: [VisitorComponent, ThankyouComponent, VisitorSignInComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
   // NgxOtpInputModule
  ],
  providers: [],
  exports: [VisitorComponent],
})
export class VisitorModule {}
