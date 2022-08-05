import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service'

@Component({
  selector: 'app-emailmain',
  templateUrl: './emailmain.component.html',
  styleUrls: ['./emailmain.component.css']
})
export class EmailmainComponent implements OnInit {

  rows :any = {};

  constructor(private inboxService: AppService) {
    this.rows = inboxService.inbox;
  }

  ngOnInit() {
  }

}
