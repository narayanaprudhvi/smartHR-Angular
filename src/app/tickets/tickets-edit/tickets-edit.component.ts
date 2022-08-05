import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Router,ActivatedRoute } from '@angular/router';
import {IMyDpOptions} from 'mydatepicker';

declare const $:any;

@Component({
  selector: 'app-tickets-edit',
  templateUrl: './tickets-edit.component.html',
  styleUrls: ['./tickets-edit.component.css']
})
export class TicketsEditComponent implements OnInit {

  public myDatePickerOptions1: IMyDpOptions = {
    todayBtnTxt: 'Today',
    dateFormat: 'dd-mm-yyyy',
    firstDayOfWeek: 'su',
    sunHighlight: true,
    inline: false,
    height: '48px'
  };

  rows = [];
  srch = [];
  editT:any = [];

  constructor(private appService:AppService,private router:Router,private route:ActivatedRoute) {
    this.rows = appService.tickets;
    this.srch = [...this.rows];
  } 

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      //console.log(params);
      this.editT = [];
      if(params.id)
      {
        var id = params.id;
        var arr = this.rows.find(function(item, i){
          return item.ticket_id == id;
        });

        if(!arr)
        {
          this.router.navigate(['tickets']);
        }
        else
        {
        this.editT.push(arr);
        this.editT = this.editT[0];
        //console.log(this.editT);
        }
      }
      else{
        this.router.navigate(['tickets']);
      }
      
      
    });
  }

  updateTicket(f)
  {
    //console.log(f.form.value);
    f.form.value.description = f.form.value.description.split(/\s+/).slice(0,25).join(" ");
    let id = f.form.value.ticket_id;
    //console.log(id);
    let arr = this.rows.find(function(item, i){
      return item.ticket_id === id
    });

    arr.ticket_id = id;
    arr.subject = f.form.value.subject;
    arr.priority = f.form.value.priority;
    arr.description = f.form.value.description;
    arr.assign_staff = f.form.value.assign_staff;

    var index = this.rows.findIndex(function(item, i){
      return item.ticket_id === id
    });

    //console.log(index);
    if (index > -1) {
        this.rows.splice(index, 1);
    }
    this.rows = this.rows;

    this.rows.unshift(arr);
    this.srch.unshift(arr);
    this.rows = this.rows;
    this.router.navigate(['tickets']);
    
  }


  onDelete(res){
    //console.log("="+res.ticket_id+"=");
    var index = this.rows.findIndex(function(item, i){
      return item.ticket_id === res.ticket_id
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
