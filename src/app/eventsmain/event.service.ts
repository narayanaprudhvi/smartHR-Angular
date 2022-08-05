import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/of';
@Injectable()
export class EventService {
  public data = [{
    id: 123,
    title: 'All Day Event',
    start: '2019-01-26' + 'T' + '11:00:00',
    end: '2019-01-26' + 'T' + '14:30:00'
  },
  {
    id: 321,
    title: 'Second Event',
    start: '2019-01-28' + 'T' + '09:00:00',
    end: '2019-01-29' + 'T' + '10:30:00'
  },
  {
    id: 325,
    title: 'Second Event',
    start: '2019-01-28' + 'T' + '09:00:00',
    end: '2019-01-29' + 'T' + '10:30:00'
  },
  {
    id: 326,
    title: 'Second Event',
    start: '2019-01-28' + 'T' + '09:00:00',
    end: '2019-01-29' + 'T' + '10:30:00'
  },
  {
    id: 323,
    title: 'Second Event',
    start: '2019-01-28' + 'T' + '09:00:00',
    end: '2019-01-29' + 'T' + '10:30:00'
  },
  {
    id: 327,
    title: 'Second Event',
    start: '2019-01-28' + 'T' + '09:00:00',
    end: '2019-01-29' + 'T' + '10:30:00'
  },
  {
    id: 329,
    title: 'Second Event',
    start: '2019-01-28' + 'T' + '09:00:00',
    end: '2019-01-29' + 'T' + '10:30:00'
  },
  {
    id: 343,
    title: 'Third Event',
    start: '2019-01-30' + 'T' + '11:00:00',
    end: '2019-01-31' + 'T' + '18:30:00'
  }];

  public getEvents(): Observable<any> {
    //console.log(this.data);
    return Observable.of(this.data);
  }

  updateEvents(res)
  {
    this.data.push(res);
    //this.data = [...this.data];
    //console.log(this.data);
    
  }

};
