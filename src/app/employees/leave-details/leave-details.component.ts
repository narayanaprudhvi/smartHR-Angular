import { Component, OnInit } from '@angular/core';
import {IMyDpOptions} from 'mydatepicker';
import { ActivatedRoute,Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-leave-details',
  templateUrl: './leave-details.component.html',
  styleUrls: ['./leave-details.component.css']
})
export class LeaveDetailsComponent implements OnInit {

  public myDatePickerOptions: IMyDpOptions = {
    todayBtnTxt: 'Today',
    dateFormat: 'dd-mm-yyyy',
    firstDayOfWeek: 'su',
    sunHighlight: true,
    inline: false,
    height: '48px'
  };

  public myDatePickerOptions1: IMyDpOptions = {
    todayBtnTxt: 'Today',
    dateFormat: 'dd-mm-yyyy',
    firstDayOfWeek: 'su',
    sunHighlight: true,
    inline: false,
    height: '38px'
  };
  
  rows = [];

  public srch = [];
  public uptL:any = [];
  uptLeaveValidation:boolean = false;

  constructor(private appService:AppService,private router:Router,private route:ActivatedRoute) { 
    this.rows = appService.leaves;
    this.srch = [...this.rows];
    
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      //console.log(params);
      this.uptL = [];
      if(params.id)
      {
        var id = params.id;
        var arr = this.rows.find(function(item, i){
          return item.leave_id == id;
        });

        if(!arr)
        {
          this.router.navigate(['employees/leaves']);
        }
        else
        {
        this.uptL.push(arr);
        this.uptL = this.uptL[0];
        //console.log(this.uptL);
        }
      }
      else{
        this.router.navigate(['employees/leaves']);
      }
      
      
    });
  }

  updateLeave(f)
  {
    //console.log(f.form.value);
    if (f.invalid === true)
      this.uptLeaveValidation = true;
    else {
      this.uptLeaveValidation = false;
    var id = f.form.value.leave_id;
    //console.log(id);
    var index = this.rows.findIndex(function(item, i){
      return item.leave_id === id
    });

    //console.log(index);
    if (index > -1) {
        this.rows.splice(index, 1);
    }
    
    this.rows.unshift(f.form.value);
    this.srch.unshift(f.form.value);
    this.rows = this.rows;
    this.router.navigate(['employees/leaves']);
  }
  }

}
