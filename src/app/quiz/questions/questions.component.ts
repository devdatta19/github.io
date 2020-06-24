import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../common/auth/auth.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  user_id;
  is_eng;
  set;
  question_number;
  currentQuestion;
  public innerWidth: any;
  form: FormGroup = new FormGroup({});
  constructor(private _router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.user_id = localStorage.getItem('user_id');
    this.is_eng = localStorage.getItem('IS_ENG');
    this.innerWidth = window.innerWidth;
    this.currentQuestion = localStorage.getItem('question_number');

    if (this.currentQuestion != '1') {

      const firstQuestionData: any = {
        user_id: this.user_id,
        is_eng: this.is_eng,
        device_id: '10:00:22', //ip
        // token : '' //user.uid
      };

      this.authService.firstQuestion(firstQuestionData)
        .subscribe((response: any) => {
          if (response.error == true) { console.log(response.error_message); }
          if (response.response.question_number) {
            this.set = response.response.set;
            this.question_number = response.response.question_number;
            localStorage.setItem('question_number', this.question_number);
          }
          console.log(response);

        });
    }else{
      const nextQuestionData: any = {
        user_id: this.user_id,
        is_eng: this.is_eng,
        device_id: '10:00:22', //ip
        // token : '' //user.uid
      };

      this.authService.nextQuestion(nextQuestionData)
        .subscribe((response: any) => {
          if (response.error == true) { console.log(response.error_message); }
          if (response.response.question_number) {
            this.set = response.response.set;
            this.question_number = response.response.question_number;
            localStorage.setItem('question_number', this.question_number);
          }
          console.log(this.set.length);

        });
    }
    console.log(this.set);

  }

  submit() {
    this._router.navigate(["/complete"]);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }
}
