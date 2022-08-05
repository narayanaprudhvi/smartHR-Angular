import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
import {IMyDpOptions} from 'mydatepicker';
import { EventService } from './event.service';
import { Subscription } from 'rxjs';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

declare const $: any;

@Component({
  selector: 'app-eventsmain',
  templateUrl: './eventsmain.component.html',
  styleUrls: ['./eventsmain.component.css']
})
export class EventsmainComponent implements OnInit {

  calendarOptions: Options;
  displayEvent: any;
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;

  public myDatePickerOptions1: IMyDpOptions = {
    todayBtnTxt: 'Today',
    dateFormat: 'dd-mm-yyyy',
    firstDayOfWeek: 'su',
    sunHighlight: true,
    inline: false,
    height: '38px'
  };

  rows = [];
  srch: any = {}
  addE: any = {};
  uptE: any = {};
  private eventSubscription: Subscription;

  constructor(private eventService: EventService) { 
      this.rows = eventService.data;
      this.srch = [...this.rows];
  }

  ngOnInit() {
    
   this.calendarOptions = {
    editable: true,
    eventLimit: true,
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay,listMonth'
    },
    events : this.rows
  };
  }

  clickButton(model: any) {
    this.displayEvent = model;
    
  }

  eventClick(model: any) {
    model = {
      event: {
        id: model.event.id,
        start: model.event.start,
        end: model.event.end,
        title: model.event.title,
        // other params
      }
    }
    this.displayEvent = model;
    //console.log(this.displayEvent);
    this.uptE = {
      id: 329,
      title: 'Second Event',
      start: {formatted:'28-01-2019'},
      start_time:'09:00:00',
      end: {formatted:'29-01-2019'},
      end_time:'10:30:00'
    }
    $('#edit_event').modal('show');
  }

  updateEvent() {
    $('#edit_event').modal('hide');
  }

  addReset() {
    let randomnumber = Math.floor(Math.random() * 500);
    this.addE = {
      'id': randomnumber,
      'title': '',
      'start': '',
      'start_time': '09:00:00',
      'end': '',
      'end_time': '09:00:00'
    }
    $('#add_event').modal('show');
  }

  addEvent(f) {
    //console.log(f.form.value);
    f.form.value.start = f.form.value.start.formatted+'T'+f.form.value.start_time; 
    f.form.value.end = f.form.value.end.formatted+'T'+f.form.value.end_time;
    this.rows.push(f.form.value);
    //this.srch.unshift(f.form.value);
    //console.log(this.rows);
    //this.eventService.updateEvents(f.form.value);
    //this.refresh.next()
    $('#add_event').modal('hide');
   
  }

}