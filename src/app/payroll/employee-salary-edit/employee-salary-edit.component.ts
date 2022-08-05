import { Component, OnInit } from '@angular/core';
import { IMyDpOptions } from 'mydatepicker';
import { Router, ActivatedRoute } from '@angular/router';
import { PayrollService } from '../payroll.service';

@Component({
  selector: 'app-employee-salary-edit',
  templateUrl: './employee-salary-edit.component.html',
  styleUrls: ['./employee-salary-edit.component.css']
})
export class EmployeeSalaryEditComponent implements OnInit {

  public myDatePickerOptions: IMyDpOptions = {
    todayBtnTxt: 'Today',
    dateFormat: 'yyyy-dd-mm',
    firstDayOfWeek: 'su',
    sunHighlight: true,
    inline: false,
    height: '48px'
  };

  public myDatePickerOptions1: IMyDpOptions = {
    todayBtnTxt: 'Today',
    dateFormat: 'yyyy-dd-mm',
    firstDayOfWeek: 'su',
    sunHighlight: true,
    inline: false,
    height: '38px'
  };

  public rows = [];

  public srch = [];
  public uptE:any = { 
  };

  //salaryUpt:boolean = false;
  uptSalaryValidation:boolean = false;
    
  constructor(private router:Router,private payrollService:PayrollService,private route:ActivatedRoute) { 
    this.rows = payrollService.employee_salary;
    this.srch = [...this.rows];
  }

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      //console.log(params);
      this.uptE = [];
      if(params.id)
      {
        var id = params.id;
        var arr = this.rows.find(function(item, i){
          return item.employee_id == id;
        });

        if(!arr)
        {
          this.router.navigate(['payroll/employee-salary']);
        }
        else
        {
        this.uptE.push(arr);
        this.uptE = this.uptE[0];
        //console.log(this.uptE);
        }
      }
      else{
        this.router.navigate(['payroll/employee-salary']);
      }
      
      
    });
  }

  updateSalary(f)
  {
    //console.log(f);
    if (f.invalid === true || (f.invalid === false && (f.form.value.earnings_basic == null || f.form.value.earnings_basic == 0)))
    {
      this.uptSalaryValidation = true;
    }
    else if(f.invalid === false && f.form.value.earnings_basic > 0)
    {
    this.uptSalaryValidation = false;
    //console.log(f.form.value);
    if(f.form.value.joining_date == undefined)
    f.form.value.joining_date = {formatted : ''};
    var id = f.form.value.employee_id;
    //console.log(id);

    var arr = this.rows.find(function(item, i){
      return item.employee_id === id
    });

    arr.employee_id = f.form.value.employee_id;
    arr.netSalary = f.form.value.netSalary;
    
    var index = this.rows.findIndex(function(item, i){
      return item.employee_id === id
    });

    //console.log(index);
    if (index > -1) {
        this.rows.splice(index, 1);
    }
   
    this.rows.unshift(arr);
    this.srch.unshift(arr);
    this.rows = this.rows;
    this.router.navigate(['payroll/employee-salary']);
  //  this.salaryUpt = false;
  }
  }

  onNetUpt(val)
  {
    //console.log(val);
    if(val >= 0)
    {
     //console.log(this.uptE);
     this.uptE.earnings_DA = this.uptE.earnings_basic * 7 /100;
     this.uptE.earnings_HRA = this.uptE.earnings_basic * 10 /100;
     this.uptE.earnings_total = this.uptE.earnings_basic+this.uptE.earnings_DA+this.uptE.earnings_HRA+this.uptE.earnings_conveyance+this.uptE.earnings_allowance+this.uptE.earnings_mallowance+this.uptE.earnings_others;
     this.uptE.deduction_total = this.uptE.deduction_ESI+this.uptE.deduction_PF+(this.uptE.deduction_TDS * this.uptE.earnings_basic/100)+this.uptE.deduction_fund+this.uptE.deduction_leave+this.uptE.deduction_loan+this.uptE.deduction_others+(this.uptE.deduction_tax * this.uptE.earnings_basic/100)+this.uptE.deduction_welfare;
     this.uptE.netSalary = this.uptE.earnings_total - this.uptE.deduction_total;
    }
  }
}
