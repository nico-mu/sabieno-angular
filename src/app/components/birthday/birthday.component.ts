import { Component, OnInit } from '@angular/core';
import * as moment from "moment";

@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.css']
})
export class BirthdayComponent implements OnInit {

  now = moment();
  bdayDay = new Date(this.now.year(), 10, 25);
  bday = moment(this.bdayDay);
  nicoBdayDay = new Date(this.now.year(), 2, 23);
  nicoBday = moment(this.nicoBdayDay);

  constructor() {
    if (moment().isAfter(this.nicoBday)) {
      this.nicoBday = this.nicoBday.add(1, 'year');
    }
    if (moment().isAfter(this.bday)) {
      this.bday = this.bday.add(1, 'year');
    }
  }

  ngOnInit(): void {
  }

}
