import {Component, Input, OnInit} from '@angular/core';
import {formatDate} from "@angular/common";
import {TimeRange} from "../../models/time-range";
import * as moment from 'moment';
import {Moment} from "moment";

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css']
})
export class CountDownComponent implements OnInit {

  private static dateFormat = 'dd.MM.yyyy HH:mm:ss';
  private static dateLocale = 'en-US';

  public dataSource: TimeRange[] = [];

  tableView = true;
  public duration: TimeRange = {} as TimeRange;
  public isToday: boolean = false;


  @Input() displayedColumns: string[] = ['months' ,'weeks', 'days', 'hours', 'minutes', 'seconds'];
  @Input() eventName = formatDate(Date(), CountDownComponent.dateFormat, CountDownComponent.dateLocale);
  @Input() targetDate = moment();

  constructor() {

  }

  ngOnInit(): void {
    this.setDate(this.targetDate);
    setInterval(() => {
      this.formatTimeRange(this.targetDate);
    }, 100)
  }

  public setDate(date: Moment) {
    this.targetDate = date;
    this.formatTimeRange(date);
  }

  private formatTimeRange(date: Moment) {
    this.isToday = date.isSame(moment(), 'day');
    const timeRange = this.getTimeRange(date);
    this.dataSource = [timeRange];
  }

  private getTimeRange(target: Moment) {
    const now = moment();
    const result = {} as TimeRange;
    const diff = target.diff(now);
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
