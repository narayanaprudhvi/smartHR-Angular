import { Component, OnInit, Input } from '@angular/core';
import { CallsService } from '../calls.service';


declare const $:any;

@Component({
  selector: 'app-videocall',
  templateUrl: './videocall.component.html',
  styleUrls: ['./videocall.component.css']
})
export class VideocallComponent implements OnInit {

  public chatSidebar:boolean = false;
  public onCall:boolean = false;
  groups = [];	
  chats = [];

  constructor(private callsService:CallsService) { 
    this.groups = callsService.groups;
    this.chats = callsService.chats;
  }

  ngOnInit() {
    var height = $(window).height();	
    $(".page-wrapper").css("min-height", height);
  }

  callAccept(){
    this.onCall = true;
  }

}
