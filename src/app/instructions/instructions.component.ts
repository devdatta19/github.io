import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../common/auth/auth.service';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {
  user_id;
  is_eng;
  checked = false;
  chooseoption = true;
  chooseInsructions = false;
  form: FormGroup = new FormGroup({
    checked: new FormControl(""),
  });
  constructor(private _router: Router,private authService: AuthService,) { }

  ngOnInit() {
   this.user_id = localStorage.getItem('user_id');
   this.is_eng = localStorage.getItem('IS_ENG');
  }
  submitInstructions (){
    this.chooseoption = false;
    this.chooseInsructions = true;
  }

  submit() {
    this._router.navigate(["/test"]);
    /* const firstQuestionData: any = {
      user_id: this.user_id,
      is_eng: this.is_eng,
      device_id : '10:00:22', //ip
     // token : '' //user.uid
    };

    this.authService.firstQuestion(firstQuestionData)
      .subscribe((response: any) => {
        if (response.error == true) { console.log(response.error_message); }
        if(response.response.question_number){
         
        }
        console.log(response);

      }); */
    
  }
}
