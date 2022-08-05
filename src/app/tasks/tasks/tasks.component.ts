import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

declare const $:any;

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  public newTask:boolean = false;
  public taskTitle = '';

  public rows = [];
  public srch = [];

  constructor(private appService:AppService) { 
    this.rows = appService.tasks;
    this.srch = [...this.rows];
  }

  ngOnInit() {

  }

  viewAdd(){
    this.newTask = true;
  }

  closeAdd(){
    this.newTask = false;
    this.taskTitle = '';
  }

  addTask(){
    this.rows.unshift({'title':this.taskTitle,'status':'upcoming','taskID':'T_07'});
    this.rows = this.rows;
    this.taskTitle = '';
    this.newTask = false;
  }

  onUpdate(val,id)
  {
    //console.log(val);
    var arr = this.rows.find(function(item, i){
      return item.taskID === id
    });

    arr.title = val;
    
    var index = this.rows.findIndex(function(item, i){
      return item.taskID === id
    });

    //console.log(index);
    if (index > -1) {
        this.rows.splice(index, 1);
    }
    
    this.rows.unshift(arr);
    this.srch.unshift(arr);
    this.rows = this.rows;
    //console.log(this.rows);
  }

  updateStatus(status,id)
  {
    //console.log(status+' '+id);

    var arr = this.rows.find(function(item, i){
      return item.taskID === id
    });

    arr.status = status === 'pending' ? 'completed' : 'pending';

    var index = this.rows.findIndex(function(item, i){
      return item.taskID === id
    });

    //console.log(index);
    if (index > -1) {
        this.rows.splice(index, 1);
    }
    
    this.rows.splice(index, 0, arr);
    this.srch.splice(index, 0, arr);
    //this.rows.push(arr);
    //this.srch.push(arr);
    this.rows = this.rows;
    //console.log(this.rows);
  }

  onDelete(item)
  {
    var id = item.taskID;
    var index = this.rows.findIndex(function(item, i){
      return item.taskID === id
    });

    //console.log(index);
    if (index > -1) {
        this.rows.splice(index, 1);
        this.srch.splice(index, 1);
    }        
    //console.log(this.rows);
    this.rows = this.rows;
  }

}
