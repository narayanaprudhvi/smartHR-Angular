import { Component, OnInit } from '@angular/core';
import {IMyDpOptions} from 'mydatepicker';
import { AppService } from 'src/app/app.service';

declare const $:any;

@Component({
  selector: 'app-managed-jobs',
  templateUrl: './managed-jobs.component.html',
  styleUrls: ['./managed-jobs.component.css']
})
export class ManagedJobsComponent implements OnInit {

  public myDatePickerOptions1: IMyDpOptions = {
    todayBtnTxt: 'Today',
    dateFormat: 'dd-mm-yyyy',
    firstDayOfWeek: 'su',
    sunHighlight: true,
    inline: false,
    height: '38px'
  };

  public rows = [];
  public srch = [];
  addJ:any = [];
  uptJ:any = [];


  constructor(private jobService:AppService) { 
    this.rows = jobService.jobs;
    this.srch = [...this.rows];
  }

  ngOnInit() {

    $('.floating').on('focus blur', function (e) {
      $(this).parents('.form-focus').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
    }).trigger('blur');

  }

  addJob(f)
  {
    //console.log(f.form.value);
    let randomnumber = Math.floor(Math.random() * 99);
    f.form.value.job_id = randomnumber;
    f.form.value.expiry_date = {formatted: "17-01-2018"};
    this.rows.unshift(f.form.value);
    this.srch.unshift(f.form.value);
    this.rows = this.rows;
    $('#add_job').modal('hide');
  }

  updateJob(f)
  {
    //console.log(f.form.value);
    var id = f.form.value.job_id;
    f.form.value.expiry_date = {formatted: "17-01-2018"};
    //console.log(id);
    var arr = this.rows.find(function(item, i){
      return item.job_id === id
    });

    arr.job_title = f.form.value.job_title;
    arr.department = f.form.value.department;
    arr.job_type = f.form.value.job_type;
    arr.status = f.form.value.status;
    arr.expiry_date = f.form.value.expiry_date;

    var index = this.rows.findIndex(function(item, i){
      return item.job_id === id
    });

    //console.log(index);
    if (index > -1) {
        this.rows.splice(index, 1);
    }
    this.rows = this.rows;

    this.rows.unshift(arr);
    this.srch.unshift(arr);
    this.rows = this.rows;
    $('#edit_job').modal('hide');
    
  }

  onEdit(item){
    let temp;
    //console.log(item);
    temp = this.rows.find(function(field, i){
      return field.job_id === item.job_id
    });;
    this.uptJ = temp;
    $('#edit_job').modal('show');
  }

  onDelete(c){
    //console.log("="+c.job_id+"=");
    var index = this.rows.findIndex(function(item, i){
      return item.job_id === c.job_id
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
