import { Component, OnInit } from '@angular/core';
import * as moment from "moment";

@Component({
  selector: 'app-count-up-anniversary',
  templateUrl: './count-up-anniversary.component.html',
  styleUrls: ['./count-up-anniversary.component.css']
})
export class CountUpAnniversaryComponent implements OnInit {

  date = new Date(2020, 11, 11);
  day = moment(this.date);

  constructor() { }

  ngOnInit(): void {
  }

}
