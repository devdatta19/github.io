import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { QuestionsComponent } from './quiz/questions/questions.component';
import { ResultComponent } from './quiz/result/result.component';
/* import { StudentsComponent } from './students/students.component';
import { AddQuestionComponent} from './add-question/add-question.component'; */


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'instructions', component: InstructionsComponent },
  { path: 'test', component: QuestionsComponent },
  { path: 'complete', component: ResultComponent },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  /* { path: 'students', component: StudentsComponent },
  { path: 'add-question', component: AddQuestionComponent }, */
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
