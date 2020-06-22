import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SharedModule} from '../../shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AddQuestionRoutingModule } from './add-question-routing.module';
import { AddQuestionComponent } from './add-question.component';

@NgModule({
  declarations: [AddQuestionComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AddQuestionRoutingModule,
    MatSidenavModule,
    SharedModule
  ]
})
export class AddQuestionModule { }
