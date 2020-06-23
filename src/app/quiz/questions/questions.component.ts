import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  public innerWidth: any;
  form: FormGroup = new FormGroup({});
  constructor(private _router: Router,) { }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }

  submit() {
    this._router.navigate(["/complete"]);
  }

  @HostListener('window:resize', ['$event'])
onResize(event) {
  this.innerWidth = window.innerWidth;
}
}
