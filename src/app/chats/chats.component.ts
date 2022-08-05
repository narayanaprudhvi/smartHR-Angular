import { Component, OnInit } from '@angular/core';
import { CallsService } from '../calls/calls.service';

declare const $:any;

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent implements OnInit {

  public message:string;
  groups = [];	
  chats = [];
  chat_data = [
    {
      chat_info : 'Will send it soon...',
    }
  ];
  chatSidebar:boolean;


  constructor(private callsService:CallsService) { 
    this.groups = callsService.groups;
    this.chats = callsService.chats;
  }

  ngOnInit() {
    var height = $(window).height();	
    $(".page-wrapper").css("min-height", height);
  }

  sendMessage(){
    //console.log(this.message);
    this.chat_data.push({'chat_info':this.message});
    //console.log(this.chat_data);
    //$("#chat_conversation").animate({ scrollTop: $('#chat_conversation').prop("scrollHeight")}, 1000);
  }

}
