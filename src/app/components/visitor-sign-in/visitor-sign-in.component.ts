import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { NgxOtpInputConfig } from 'ngx-otp-input';
import { timer } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-visitor-sign-in',
  templateUrl: './visitor-sign-in.component.html',
  styleUrls: ['./visitor-sign-in.component.scss']
})
export class VisitorSignInComponent implements OnInit {
  public signInForm = new FormGroup({
      email: new FormControl('',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[A-Za-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
        ])
      )
  });
  public isSubmitted!: boolean;
  public otpInputConfig = {
    otpLength: 6,
    autofocus: true,
    classList: {
      inputBox: 'my-super-box-class',
      input: 'my-super-class',
      inputFilled: 'my-super-filled-class',
      inputDisabled: 'my-super-disable-class',
      inputSuccess: 'my-super-success-class',
      inputError: 'my-super-error-class',
    },
  };
  secondsLeft!: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.isSubmitted = false;
    const countdown$ = timer(0, 1000).pipe(
      take(180),
      map(secondsElapsed => {
       
        return 180 - secondsElapsed})
    );
    
    countdown$.subscribe(secondsLeft => {
      //this.secondsLeft = secondsLeft;
      const minutes: number = Math.floor(secondsLeft / 60);
      this.secondsLeft =  minutes + ':' + (secondsLeft - minutes * 60);
    });
  }

  public getOTP(): void {
    this.isSubmitted = true;
  }

  public handeOtpChange(value: string[]): void {
    console.log(value);
  }

  public handleFillEvent(value: string): void {
    console.log(value);
  }
}
