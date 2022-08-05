import { Component, OnInit } from '@angular/core';
import { CallsService } from '../calls.service';

@Component({
  selector: 'app-voicecall',
  templateUrl: './voicecall.component.html',
  styleUrls: ['./voicecall.component.css']
})
export class VoicecallComponent implements OnInit {

  public chatSidebar:boolean = false;
  public onCall:boolean = true;
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
