import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
  import { Router } from "@angular/router";
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireStorage } from "@angular/fire/storage";
import * as firebase from 'firebase';
import { map, finalize } from "rxjs/operators";
import { Observable } from "rxjs";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent implements OnInit {
  @ViewChild('imgRenderer') imgRenderer: ElementRef;
  @ViewChild('imgRenderer2') imgRenderer2: ElementRef;
  @ViewChild('imgRenderer3') imgRenderer3: ElementRef;
  @ViewChild('imgRenderer4') imgRenderer4: ElementRef;
  @ViewChild('imgRenderer5') imgRenderer5: ElementRef;
  @ViewChild('imgRenderer6') imgRenderer6: ElementRef;
  form: FormGroup = new FormGroup({
    type: new FormControl("",Validators.required),
    section: new FormControl("",Validators.required),
    q1: new FormControl("",Validators.required),
    q2: new FormControl(""),
    opt1: new FormControl("",Validators.required),
    opt2: new FormControl("",Validators.required),
    opt3: new FormControl("",Validators.required),
    opt4: new FormControl("",Validators.required),
    ans: new FormControl("",Validators.required)
  });
  question1;question2;option1;option2;option3;option4;

  downloadURL: Observable<string>; 
 constructor(private toastr: ToastrService,private _router: Router,private fb: FormBuilder,private storage: AngularFireStorage) {}

 /**
   * Paste from clipboard
   */
  onPaste(event: any,fileInput) {
    const items = (event.clipboardData || event.originalEvent.clipboardData).items;
    let blob = null;
    let q1 = '';
    let q2 = '';
    let opt1 = '';
    let opt2 = '';
    let opt3 = '';
    let opt4 = '';


    for (const item of items) {
      if (item.type.indexOf('image') === 0) {
        blob = item.getAsFile();
      }
    }

     // load image if there is a pasted image
     if (blob !== null) {
      const reader = new FileReader();
      reader.onload = (evt: any) => {
        console.log(evt.target.result); // data url!
        if (fileInput == 'q1') {
          q1 = evt.target.result;
        this.imgRenderer.nativeElement.src = evt.target.result;
        this.uploadToFireBase(blob,'q1');
        }else if (fileInput == 'q2') {
          q2 = evt.target.result;
          this.imgRenderer2.nativeElement.src = evt.target.result;
          this.uploadToFireBase(blob,'q2');
        }else if (fileInput == 'opt1') {
          q2 = evt.target.result;
          this.imgRenderer3.nativeElement.src = evt.target.result;
          this.uploadToFireBase(blob,'opt1');
        }else if (fileInput == 'opt2') {
          q2 = evt.target.result;
          this.imgRenderer4.nativeElement.src = evt.target.result;
          this.uploadToFireBase(blob,'opt2');
        }else if (fileInput == 'opt3') {
          q2 = evt.target.result;
          this.imgRenderer5.nativeElement.src = evt.target.result;
          this.uploadToFireBase(blob,'opt3');
        }else if (fileInput == 'opt4') {
          q2 = evt.target.result;
          this.imgRenderer6.nativeElement.src = evt.target.result;
          this.uploadToFireBase(blob,'opt4');
        }
        /* var n = Date.now();
    const file = blob;
        const filePath = `ArasExam/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`ArasExam/${n}`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              this.fb1 = url;
            }
            console.log(this.fb1);
          });
        })
      )
      .subscribe(url => {
        if (url) {
          console.log(url);
        }
      }); */


      };
      reader.readAsDataURL(blob);
    }
  }

  uploadToFireBase(blob,imageFor){
    var n = Date.now();
    const file = blob;
        const filePath = `ArasExam/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`ArasExam/${n}`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              if(imageFor == 'q1'){
                this.question1 = url;
              }else if(imageFor == 'q2'){
                this.question2 = url;
              }else if(imageFor == 'opt1'){
                this.option1 = url;
              }else if(imageFor == 'opt2'){
                this.option2 = url;
              }else if(imageFor == 'opt3'){
                this.option3 = url;
              }else if(imageFor == 'opt4'){
                this.option4 = url;
              }
             // url1 = url;
            }
            console.log(this.question1);
            console.log(this.question2);

          });
        })
      )
      .subscribe(url => {
        if (url) {
          console.log(url);
        }
      });
  }

  onInput(content: string) {
    console.log("New content: ", content);
  }

  get formControls() { return this.form.controls; }

  ngOnInit() {
  }
  submit(){
    console.log("here");
    //if(this.form.invalid){
      console.log(this.form.value.type);
      if(this.form.value.type == ''){
        console.log("aaa");
        this.toastr.warning("Paper type is required.");
        return;
      }
      if(this.form.value.section == ''){
        this.toastr.warning("Section is required");
        return;
      }
      if(this.form.value.q1 == '' || this.form.value.q1 == undefined){
        this.toastr.warning("Question 1 is required.");
        return;
      }
      if(this.form.value.opt3 == '' || this.form.value.opt3 == undefined){
        this.toastr.warning("Option 3 is required.");
        return;
      }
      if(this.form.value.opt1 == '' || this.form.value.opt1 == undefined){
        this.toastr.warning("Option 1 is required.");
        return;
      }
      if(this.form.value.opt2 == '' || this.form.value.opt2 == undefined){
        this.toastr.warning("Option 2 is required.");
        return;
      }
      if(this.form.value.opt4 == '' || this.form.value.opt4 == undefined){
        this.toastr.warning("Option 4 is required.");
        return;
      }
      if(this.form.value.ans == ''){
        this.toastr.warning("Answer is required.");
        return;
      }
      
   // }
  }
}
