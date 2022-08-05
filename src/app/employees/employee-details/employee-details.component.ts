import { Component, OnInit } from '@angular/core';
import {IMyDpOptions} from 'mydatepicker';
import { Router,ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  public myDatePickerOptions: IMyDpOptions = {
    todayBtnTxt: 'Today',
    dateFormat: 'dd-mm-yyyy',
    firstDayOfWeek: 'su',
    sunHighlight: true,
    inline: false,
    height: '38px'
  };
  
  // public model: any = { date: { year: 2018, month: 10, day: 9 } };
  // public model1: any = { date: { year: 2018, month: 10, day: 9 } };

  rows = [];
  public uptEmp:any = [];
  public srch = [];

  user = {
    leaveReq_read:true,
    holiday_read:false,
    clients_read:true,
    projects_read:true,
    tasks_read:true,
    chats_read:true,
    assets_read:true,
    timesheet_read:false,
    leaveReq_write:true,
    holiday_write:true,
    clients_write:true,
    projects_write:true,
    tasks_write:true,
    chats_write:true,
    assets_write:true,
    timesheet_write:true,
    leaveReq_create:true,
    holiday_create:true,
    clients_create:true,
    projects_create:true,
    tasks_create:true,
    chats_create:false,
    assets_create:true,
    timesheet_create:true,
    leaveReq_delete:true,
    holiday_delete:true,
    clients_delete:true,
    projects_delete:true,
    tasks_delete:true,
    chats_delete:true,
    assets_delete:true,
    timesheet_delete:true,
    leaveReq_import:true,
    holiday_import:true,
    clients_import:true,
    projects_import:true,
    tasks_import:true,
    chats_import:true,
    assets_import:true,
    timesheet_import:true,
    leaveReq_export:true,
    holiday_export:true,
    clients_export:true,
    projects_export:true,
    tasks_export:true,
    chats_export:true,
    assets_export:true,
    timesheet_export:true,
  };

  uptEmployeeValidation:boolean = false;

  constructor(private appService:AppService,private router:Router,private route:ActivatedRoute) { 
    this.rows = appService.employees;
    this.srch = [...this.rows];
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      //console.log(params);
      this.uptEmp = [];
      if(params.id)
      {
        var id = params.id;
        var arr = this.rows.find(function(item, i){
          return item.employeeID == id;
        });

        if(!arr)
        {
          this.router.navigate(['employees/all-employees']);
        }
        else
        {
        this.uptEmp.push(arr);
        this.uptEmp = this.uptEmp[0];
        //console.log(this.uptEmp);
        }
      }
      else{
        this.router.navigate(['employees/all-employees']);
      }
      
      
    });
  }
  
    
  updateSubmit(f)
  {
    //console.log(f.form.value);
    if (f.invalid === true)
      this.uptEmployeeValidation = true;
    else {
      this.uptEmployeeValidation = false;
    var id = f.form.value.employeeID;
    //console.log(id);
    var index = this.rows.findIndex(function(item, i){
      return item.employeeID === id
    });

    //console.log(index);
    if (index > -1) {
        this.rows.splice(index, 1);
    }
    
    this.rows.unshift(f.form.value);
    this.srch.unshift(f.form.value);
    this.rows = this.rows;
    this.router.navigate(['employees/all-employees']);
    }
  }
}
