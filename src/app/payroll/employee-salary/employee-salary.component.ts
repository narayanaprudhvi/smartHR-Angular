import { Component, OnInit } from '@angular/core';
import { Form,FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { IMyDpOptions } from 'mydatepicker';
import { Router } from '@angular/router';
import { PayrollService } from '../payroll.service';

declare const $:any;

@Component({
  selector: 'app-employee-salary',
  templateUrl: './employee-salary.component.html',
  styleUrls: ['./employee-salary.component.css']
})
export class EmployeeSalaryComponent implements OnInit {
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
  public addE:any = {};
  public uptE:any = { 
  };

  salaryUpt:boolean = false;
  addSalaryValidation:boolean = false;
  uptSalaryValidation:boolean = false;
    
  constructor(private router:Router,private payrollService:PayrollService,public fb: FormBuilder) { 
    this.rows = payrollService.employee_salary;
    this.srch = [...this.rows];
  }

  ngOnInit() {
    $('.floating').on('focus blur', function (e) {
      $(this).parents('.form-focus').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
    }).trigger('blur');

    //console.log(new Date());

  }

  payslip(index)
  {
    this.router.navigate(['payroll/payslip'], { queryParams: { 'id': index } });
  }

  addSalaryReset()
  {
    this.addE = {
      'role':'Employer',
      'email':'asasjhggdg@gmail.com',
      'netSalary':0,
      'earnings_DA':0,
      'earnings_basic':0,
      'earnings_HRA':0,
      'earnings_conveyance':0,
      'earnings_allowance':0,
      'earnings_mallowance':0,
      'earnings_others':0,
      'earnings_total':0,
      'deduction_total':0,
      'deduction_TDS':0,
      'deduction_ESI':0,
      'deduction_PF':0,
      'deduction_leave':0,
      'deduction_tax':0,
      'deduction_welfare':0,
      'deduction_fund':0,
      'deduction_loan':0,
      'deduction_others':0
    };
    this.addSalaryValidation = false;
    $('#add_salary').modal('show');
  }

  addSalary(f)
  {
    //console.log(f);
    if (f.invalid === true || (f.invalid === false && (f.form.value.earnings_basic == null || f.form.value.earnings_basic == 0)))
    {
    this.addSalaryValidation = true;
    }
    else if(f.invalid === false && f.form.value.earnings_basic > 0)
    {
    this.addSalaryValidation = false;
    let randomnumber = Math.floor(Math.random()*99);
    f.form.value.employee_id = randomnumber;
    if(f.form.value.joining_date == undefined)
    f.form.value.joining_date = {formatted : ''};
    //console.log(f.form.value);
    this.rows.unshift(f.form.value);
    this.srch.unshift(f.form.value);
    this.rows = this.rows;
    $('#add_salary').modal('hide');
    }
  }

  onNetAdd(val)
  {
    //console.log(val);
    if(val >= 0)
    {
     //console.log(this.addE);
     this.addE.earnings_DA = this.addE.earnings_basic * 7 /100;
     this.addE.earnings_HRA = this.addE.earnings_basic * 10 /100;
     this.addE.earnings_total = this.addE.earnings_basic+this.addE.earnings_DA+this.addE.earnings_HRA+this.addE.earnings_conveyance+this.addE.earnings_allowance+this.addE.earnings_mallowance+this.addE.earnings_others;
     this.addE.deduction_total = this.addE.deduction_ESI+this.addE.deduction_PF+(this.addE.deduction_TDS * this.addE.earnings_basic/100)+this.addE.deduction_fund+this.addE.deduction_leave+this.addE.deduction_loan+this.addE.deduction_others+(this.addE.deduction_tax * this.addE.earnings_basic/100)+this.addE.deduction_welfare;
     this.addE.netSalary = this.addE.earnings_total - this.addE.deduction_total;
    }
  }

  onEdit(id){
    //console.log(id);
    this.router.navigate(['payroll/employee-salary/edit'], { queryParams: { 'id': id } });
  }

  onEditReturn(id){
    return this.rows.find(function(item, i){
      return item.employee_id === id
    });
  }

  onDelete(c){
    //console.log("="+c.employee_id+"=");
    var index = this.rows.findIndex(function(item, i){
      return item.employee_id === c.employee_id
    });

    //console.log(index);
    if (index > -1) {
        this.rows.splice(index, 1);
        this.srch.splice(index, 1);
    }        
    //console.log(this.rows);
    this.rows = this.rows;
  }

  searchName(val) {
    //console.log(val);
    //console.log(this.srch);
    this.rows.splice(0, this.rows.length);
    //console.log(this.rows);
    let temp = this.srch.filter(function(d) {
      //console.log(d.employee_name);
      val = val.toLowerCase();
      return d.employee_name.toLowerCase().indexOf(val) !== -1 || !val;
    });
    //console.log(temp);
    this.rows.push(...temp);
    //console.log(this.rows);
  }

  searchRole(val) {
    //console.log(val);
    //console.log(this.srch);
    this.rows.splice(0, this.rows.length);
    //console.log(this.rows);
    let temp = this.srch.filter(function(d) {
      //console.log(d.role);
      val = val.toLowerCase();
      return d.role.toLowerCase().indexOf(val) !== -1 || !val;
    });
    //console.log(temp);
    this.rows.push(...temp);
    //console.log(this.rows);
  }

  searchStatus(val) {
    //console.log(val);
    //console.log(this.srch);
    this.rows.splice(0, this.rows.length);
    //console.log(this.rows);
    let temp = this.srch.filter(function(d) {
      //console.log(d.status);
      val = val.toLowerCase();
      return d.status.toLowerCase().indexOf(val) !== -1 || !val;
    });
    //console.log(temp);
    this.rows.push(...temp);
    //console.log(this.rows);
  }

}
