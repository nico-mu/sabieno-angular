import {Component, Input, OnInit} from '@angular/core';
import {TimeRange} from "../../models/time-range";
import {formatDate} from "@angular/common";
import * as moment from "moment/moment";
import {Moment} from "moment/moment";

@Component({
  selector: 'app-count-up',
  templateUrl: './count-up.component.html',
  styleUrls: ['./count-up.component.css']
})
export class CountUpComponent implements OnInit {

  private static dateFormat = 'dd.MM.yyyy HH:mm:ss';
  private static dateLocale = 'en-US';

  public dataSource: TimeRange[] = [];

  tableView = true;
  public duration: TimeRange = {} as TimeRange;

  @Input() displayedColumns: string[] = ['years', 'months' ,'weeks', 'days', 'hours', 'minutes', 'seconds'];
  @Input() eventName = formatDate(Date(), CountUpComponent.dateFormat, CountUpComponent.dateLocale);
  @Input() startDate = moment();

  constructor() { }

  ngOnInit(): void {
    this.setDate(this.startDate);
    setInterval(() => {
      this.formatTimeRange(this.startDate);
    }, 100)
  }

  public setDate(date: Moment) {
    this.startDate = date;
    this.formatTimeRange(date);
  }

  private formatTimeRange(date: Moment) {
    const timeRange = this.getTimeRange(date);
    this.dataSource = [timeRange];
  }

  private getTimeRange(target: Moment) {
    const now = moment();
    const result = {} as TimeRange;
    const diff = now.diff(target);
    const duration = moment.duration(diff);
    result.years = duration.years();
    result.months = duration.months();
    result.weeks = duration.weeks();
    result.days = duration.days() % 7;
    result.hours = duration.hours();
    result.minutes = duration.minutes();
    result.seconds = duration.seconds();

    this.duration.seconds = Math.floor(duration.asSeconds() * 10) / 10;
    this.duration.minutes = Math.floor(duration.asMinutes() * 10) / 10;
    this.duration.hours = Math.floor(duration.asHours() * 10) / 10;
    this.duration.days = Math.floor(duration.asDays() * 10) / 10;
    this.duration.weeks = Math.floor(duration.asWeeks() * 10) / 10;
    this.duration.months = Math.floor(duration.asMonths() * 10) / 10;
    this.duration.years = Math.floor(duration.asYears() * 10) / 10;

    return result;
  }

  switchData() {
    this.tableView = !this.tableView;
  }
}
