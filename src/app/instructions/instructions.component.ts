import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {
  checked = false;
  chooseoption = true;
  chooseInsructions = false;
  form: FormGroup = new FormGroup({
    checked: new FormControl(""),
  });
  constructor(private _router: Router) { }

  ngOnInit() {
  }
  submitInstructions (){
    this.chooseoption = false;
    this.chooseInsructions = true;
  }

  submit() {
    this._router.navigate(["/test"]);
  }
}
