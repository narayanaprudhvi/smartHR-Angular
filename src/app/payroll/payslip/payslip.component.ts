import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { PayrollService } from '../payroll.service';

@Component({
  selector: 'app-payslip',
  templateUrl: './payslip.component.html',
  styleUrls: ['./payslip.component.css']
})
export class PayslipComponent implements OnInit {

  constructor(private route: ActivatedRoute,private router:Router,private payrollService:PayrollService) { 
    this.rows = payrollService.employee_salary;
  }

  rows = [];
  viewP:any = [];

  salaryInWords;
  invoice_optV : boolean = false;
 
  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      //console.log(params);
      this.viewP = [];
      if(params.id)
      {
        //console.log(params.id);
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
        this.viewP.push(arr);
        this.invoice_optV = true;
        this.viewP = this.viewP[0];
        //console.log(this.viewP);
        }
      }
      else{
        this.viewP = [{
          'payslip_number':'43867',
          'employee_name':'Narendhar Shan',
          'employee_id':908,
          'email':'narendhar@gmail.com',
          'designation':'Web Designer',
          'role':'Manager',
          'joining_date': { formatted: "2014-11-14" },
          'netSalary':41340,
          'earnings_DA':123,
          'earnings_basic':40500,
          'earnings_HRA':45,
          'earnings_conveyance':234,
          'earnings_allowance':123,
          'earnings_mallowance':1233,
          'earnings_others':567,
          'earnings_total':45670,
          'deduction_total':5600,
          'deduction_TDS':20,
          'deduction_ESI':0,
          'deduction_PF':0,
          'deduction_leave':0,
          'deduction_tax':0,
          'deduction_welfare':0,
          'deduction_fund':0,
          'deduction_loan':0,
          'deduction_others':0
        }];
        this.viewP = this.viewP[0];
        return;
        //this.router.navigate(['payroll/employee-salary']);
      }
      
     
     
    });
  }

}
