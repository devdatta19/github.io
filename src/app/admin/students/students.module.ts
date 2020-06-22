import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SharedModule} from '../../shared/shared.module';
import { MatTableModule } from '@angular/material/table'

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';

@NgModule({
  declarations: [StudentsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StudentsRoutingModule,
    SharedModule,
    MatTableModule
  ]
})
export class StudentsModule { }
