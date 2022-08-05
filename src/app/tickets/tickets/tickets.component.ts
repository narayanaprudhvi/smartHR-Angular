import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Router,ActivatedRoute } from '@angular/router';
import {IMyDpOptions} from 'mydatepicker';

declare const $:any;

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

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
  addT:any = [];

  constructor(private appService:AppService,private router:Router) {
    this.rows = appService.tickets;
    this.srch = [...this.rows];
  }

  ngOnInit() {
    $('.floating').on('focus blur', function (e) {
      $(this).parents('.form-focus').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
    }).trigger('blur');
  }

  addReset(){
    let randomnumber = Math.floor(Math.random() * 99);
    this.addT = {
      'ticket_id':randomnumber
    }
    $('#add_ticket').modal('show');
  }

  onView(item){
    this.router.navigate(['tickets/details'],{queryParams:{'id':item.ticket_id}})
  }

  onEdit(item){
    this.router.navigate(['tickets/edit'],{queryParams:{'id':item.ticket_id}})
  }

  addTicket(f)
  {
    f.form.value.status = 'New';
    //console.log(f.form.value);
    this.rows.unshift(f.form.value);
    this.srch.unshift(f.form.value);
    this.rows = this.rows;
    $('#add_ticket').modal('hide');
  }

  onDelete(res){
    //console.log("="+res.ticket_id+"=");
    var index = this.rows.findIndex(function(item, i){
      return item.ticket_id === res.ticket_id;
    });

    //console.log(index);
    if (index > -1) {
        this.rows.splice(index, 1);
        this.srch.splice(index, 1);
    }        
    //console.log(this.rows);
    this.rows = this.rows;
  }

  searchPriority(val) {
    //console.log(val);
    //console.log(this.srch);
    this.rows.splice(0, this.rows.length);
    //console.log(this.rows);
    let temp = this.srch.filter(function(d) {
      //console.log(d.priority);
      val = val.toLowerCase();
      return d.priority.toLowerCase().indexOf(val) !== -1 || !val;
    });
    //console.log(temp);
    this.rows.push(...temp);
    //console.log(this.rows);
  }

}
