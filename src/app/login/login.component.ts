import { Component, OnInit, AfterViewInit } from '@angular/core';
//import { NgxUiLoaderService } from 'ngx-ui-loader';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

import { AuthService } from '../common/auth/auth.service';
import { WindowService } from '../common/window/window.service';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user_id;
  user_token;
  windowRef: any;
  phoneNumber: string;
  otp: string;
  isEng:any = 1;
  disableOTPSendButton = false;
  form: FormGroup = new FormGroup({
    phoneNumber: new FormControl(""),
    otp: new FormControl("")
  });
  constructor(private _router: Router, private fb: FormBuilder, private afAuth: AngularFireAuth, private authService: AuthService,
    private windowService: WindowService) { }

  ngOnInit() {
    this.windowRef = this.windowService.windowRef;
  }
  get formControls() { return this.form.controls; }

  ngAfterViewInit() {
    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
      'size': 'normal',
      'callback': (response) => {
        this.disableOTPSendButton = false;
      }
    });
    this.windowRef.recaptchaVerifier.render();
  }

  sendOTP() {
    const phoneData: any = {
      phone: this.form.value.phoneNumber,
    };
    this.authService.verifyPhone(phoneData)
      .subscribe((response: any) => {
        if (response.error == true) { console.log(response.error_message); }
        if (response.response.user_exists == true) {
          this.user_id = response.response.user_id;
          this.phoneNumber = '+91' + this.form.value.phoneNumber;
          this.afAuth.auth.signInWithPhoneNumber(this.phoneNumber, this.windowRef.recaptchaVerifier).then((confirmationResult) => {
            this.windowRef.confirmationResult = confirmationResult;
          });
        } else {
          console.log("User does not exist");
        }
        console.log(response);

      });

    /* this.phoneNumber = '+91' + this.form.value.phoneNumber;
    this.afAuth.auth.signInWithPhoneNumber(this.phoneNumber, this.windowRef.recaptchaVerifier).then((confirmationResult) => {
      this.windowRef.confirmationResult = confirmationResult;
    }); */
  }



  verifyOTP() {
    this.windowRef.confirmationResult.confirm(this.form.value.otp)
      .then((userCredentials) => console.log(userCredentials.user.uid),
        this.loginResult()
        //this._router.navigate(["/instructions"])
      );
  }

  loginResult() {
    const loginResultData: any = {
      user_id: this.user_id,
      otp: this.form.value.otp,
      device_id: '10:00:22', //ip
      token: '' //user.uid
    };

    this.authService.loginResult(loginResultData)
      .subscribe((response: any) => {
        if (response.error == true) { console.log(response.error_message); }
        if (response.response.is_admin == 1) {
          this._router.navigate(["/admin"]);
        } else {
          if (response.response.exam_window_closed) {
            console.log("exam over");
          } else {
            var aspirantType = response.response.aspirant_type;
            var engExamgiven = response.response.eng_exam_given;
            var medExamGiven = response.response.med_exam_given;
            localStorage.setItem('DEVICE_ID', '10:00:22');
            localStorage.setItem('user_id', this.user_id);
            localStorage.setItem('question_number', '0');

            if (aspirantType == 0) {
              if (engExamgiven > 0) {
                console.log("over");
              } else {
                this.isEng = 1;
                this._router.navigate(["/instructions"]);
              }
            } else if (aspirantType == 1) {
              if (medExamGiven > 0) {
                console.log("over");
              } else {
                this.isEng = 0;
                this._router.navigate(["/instructions"]);
              }
            } else {
              if (medExamGiven == 0 && engExamgiven == 0) {
                this._router.navigate(["/instructions"]); //handle routing
              } else if (engExamgiven == 0) {
                this.isEng = 1;
                this._router.navigate(["/instructions"]); //handle routing
              } else if (medExamGiven == 0) {
                this.isEng = 0;
                this._router.navigate(["/instructions"]); //handle routing
              } else {
                console.log("over");
              }
            }
            localStorage.setItem('IS_ENG', this.isEng);
          }
        }
        console.log(response);

      });

  }

  togglePhoneSignIn() {
    this.authService.phoneSignIn = !this.authService.phoneSignIn;
  }

  submit() {
    if (this.form.value.phoneNumber == '9999999999') {
      this._router.navigate(["/admin"]);
    } else {
      this._router.navigate(["/instructions"]);
    }

  }


}