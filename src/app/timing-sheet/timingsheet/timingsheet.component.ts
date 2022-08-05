import { Component, OnInit, ViewChild } from '@angular/core';
import {IMyDpOptions} from 'mydatepicker';
import { AppService } from 'src/app/app.service';
import { Router,ActivatedRoute} from '@angular/router';

declare const $:any;

@Component({
  selector: 'app-timingsheet',
  templateUrl: './timingsheet.component.html',
  styleUrls: ['./timingsheet.component.css']
})
export class TimingsheetComponent implements OnInit {

  public myDatePickerOptions: IMyDpOptions = {
    todayBtnTxt: 'Today',
    dateFormat: 'dd-mm-yyyy',
    firstDayOfWeek: 'su',
    sunHighlight: true,
    inline: false,
    height: '38px',
    componentDisabled:true
  };

  public rows = [];
  public srch = [];
  addSheetValidation:boolean = false;
  date = new Date();
  curr_date = this.date.getDate();
  curr_month = this.date.getMonth() + 1;
  curr_year = this.date.getFullYear();
  dateToday = this.curr_date+'-'+this.curr_month+'-'+this.curr_year;

  public addS:any = [];

  constructor(private AppService:AppService,private route:ActivatedRoute,private router:Router) { 
    this.rows = AppService.timingsheet;
    this.srch = [...this.rows];
  }

  ngOnInit() {
    //console.log(this.date);
  }

  addReset(){
    //console.log(this.date);
    this.addS = {
      'hours_assigned':20,
      'hours_remaining':12,
      'date':{formatted:this.dateToday},
      'deadline':{formatted:'02-01-2018'}
    };
    $('#add_todaywork').modal('show');
  }

  addSheet(f)
  {
    //console.log(f.form.value);
    let randomnumber = Math.floor(Math.random() * 99);
    f.form.value.sheet_id = randomnumber;
    if (f.invalid === true)
      this.addSheetValidation = true;
    else 
    {
      this.addSheetValidation = false;
    f.form.value.status = 'Active';
    this.rows.unshift(f.form.value);
    this.srch.unshift(f.form.value);
    this.rows = this.rows;
    $('#add_todaywork').modal('hide');
    }
  }

  onEdit(item){
    this.router.navigate(['timing-sheet/edit'], { queryParams: { 'id': item.sheet_id } });
  }

  onDelete(c){
    //console.log("="+c.sheet_id+"=");
    var index = this.rows.findIndex(function(item, i){
      return item.sheet_id === c.sheet_id
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
