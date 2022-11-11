import { Component, OnInit } from '@angular/core';
import * as moment from "moment";

@Component({
  selector: 'app-anniversary',
  templateUrl: './anniversary.component.html',
  styleUrls: ['./anniversary.component.css']
})
export class AnniversaryComponent implements OnInit {

  now = moment();
  anniversaryDate = new Date(this.now.year(), 11, 11);
  anniversary = moment(this.anniversaryDate);

  constructor() {
    if (moment().isAfter(this.anniversary)) {
      this.anniversary = this.anniversary.add(1, 'year');
    }
  }

  ngOnInit(): void {
  }

}
