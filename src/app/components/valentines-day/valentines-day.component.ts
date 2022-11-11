import { Component, OnInit } from '@angular/core';
import * as moment from "moment";

@Component({
  selector: 'app-valentines-day',
  templateUrl: './valentines-day.component.html',
  styleUrls: ['./valentines-day.component.css']
})
export class ValentinesDayComponent implements OnInit {

  now = moment();
  date = new Date(this.now.year(), 1, 14);
  day = moment(this.date);

  constructor() {
    if (moment().isAfter(this.day)) {
      this.day = this.day.add(1, 'year');
    }
  }

  ngOnInit(): void {
  }

}
