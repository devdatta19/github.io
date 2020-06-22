import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
/* import { SidenavComponent} from '../sidenav/sidenav.component'; */

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    SharedModule,
   AdminRoutingModule,
    RouterModule,
    HttpClientModule,
  ]
})
export class AdminModule { }
