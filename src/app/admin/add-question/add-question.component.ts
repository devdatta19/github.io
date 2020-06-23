import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent implements OnInit {
  form: FormGroup = new FormGroup({
    type: new FormControl(""),
    section: new FormControl(""),
    q1: new FormControl(""),
    q2: new FormControl(""),
    opt1: new FormControl(""),
    opt2: new FormControl(""),
    opt3: new FormControl(""),
    opt4: new FormControl(""),
    ans: new FormControl("")
  });
 constructor(private _router: Router,private fb: FormBuilder) {}

  get formControls() { return this.form.controls; }

  ngOnInit() {
  }

}
