import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
    {
      path: '',
      component: AdminComponent,
    },
      { path: 'students', loadChildren: () => import('./students/students.module').then(m => m.StudentsModule)},
        { path: 'add-question', loadChildren: () => import('./add-question/add-question.module').then(m => m.AddQuestionModule)},        
    ];
    
    @NgModule({
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    })
    export class AdminRoutingModule { }