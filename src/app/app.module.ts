import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppFirebaseModule } from './app-firebase/app-firebase.module';

import { AuthService } from './common/auth/auth.service';
import { WindowService } from './common/window/window.service';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NoopAnimationsModule,BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { QuizComponent } from './quiz/quiz.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { QuestionsComponent } from './quiz/questions/questions.component';
import { ResultComponent } from './quiz/result/result.component'; 
/*import { AdminComponent } from './admin/admin.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { StudentsComponent } from './students/students.component';
import { AddQuestionComponent } from './add-question/add-question.component'; */

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    QuizComponent,
    InstructionsComponent,
    QuestionsComponent,
    ResultComponent,
    /* AdminComponent,
    SidenavComponent,
    StudentsComponent,
    AddQuestionComponent, */
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NoopAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppFirebaseModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [ AuthService,
    WindowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
