import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CallsService {

  public groups = ["#General","#Video Responsive Survey","#Warehouse"];
  public chats = [
    {'name':'John Doe','count':1},
    {'name':'Richard Miles','count':18},
    {'name':'John Smith','count':null},
    {'name':'Mike Litrous','count':108}
  ];

  constructor() { }
}
