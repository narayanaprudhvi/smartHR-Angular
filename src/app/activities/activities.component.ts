import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  public activities = [
    {
      'user':'Lesley Grauer',
      'message':'added new task',
      'source':'Harvey Clinic',
      'time':'4 mins ago'
    },
    {
      'user':'Jeffrey Lalor',
      'message':'completed task',
      'source':'Appointment booking with payment gateway',
      'time':'6 mins ago'
    },
    {
      'user':'Bernardo Galaviz',
      'message':'changed the task name',
      'source':'Doctor available module',
      'time':'10 days ago'
    },
    {
      'user':'Mike Litorus',
      'message':'added new task',
      'source':'Patient and Doctor video conferencing',
      'time':'1 month ago'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
