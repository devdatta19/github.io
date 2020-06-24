import {Component, OnInit} from '@angular/core';
import { Router } from "@angular/router";
import {MatTableDataSource} from '@angular/material/table';
import { AuthService } from '../../common/auth/auth.service';

export interface PeriodicElement {
  1: string;  //userid
  2: string; //name
  3: number; //phone no
  4: string; //otp
  5: number; //status
  6: string; //eng marks
  7: string; // med marks
  8: string; //help
  9: string; //aspirant type
  a: number; //no of tabs
  b: number; //eng exam given
  c: number; // med exam given
  d: string; //date created
  e: string; //date modified;
  
}

/* const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
]; */

/**
 * @title Table with filtering
 */
@Component({
  selector: 'students-app',
  styleUrls: ['./students.component.css'],
  templateUrl: './students.component.html',
})
export class StudentsComponent implements OnInit {
  displayedColumns: string[] = ['userid', 'name', 'phone_no', 'otp','status','eng_marks','med_marks','help','aspirant type','no_of_tabs','eng_exam_given','med_exam_given'];
  dataSource = new MatTableDataSource();
  studentDetails;
  constructor(private _router: Router, private authService: AuthService) { }
  ngOnInit() {
    const firstQuestionData: any = {
      is_admin: 0,
      is_deleted: 0,
      device_id: '10:00:22', //ip
      // token : '' //user.uid
    };

    this.authService.userList(firstQuestionData)
      .subscribe((response: any) => {
        console.log(response);
        if (response.error == true) { console.log(response.error_message); }
        if (response.response) {
          //this.dataSource = new MatTableDataSource(response.response);
          this.studentDetails = response.response;
          console.log(this.dataSource);
         /*  this.set = response.response.set;
          this.question_number = response.response.question_number;
          localStorage.setItem('question_number', this.question_number); */
        }
        console.log(response);

      });
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}