import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PayrollService {

  employee_salary = [{
    'payslip_number':'43567',
    'employee_name':'John Doe',
    'employee_id':906,
    'email':'johndoe@gmail.com',
    'designation':'Web Designer',
    'role':'Employer',
    'joining_date': { formatted: "2013-11-14" },
    'netSalary':11340,
    'earnings_DA':123,
    'earnings_basic':12500,
    'earnings_HRA':45,
    'earnings_conveyance':234,
    'earnings_allowance':123,
    'earnings_mallowance':1233,
    'earnings_others':567,
    'earnings_total':15670,
    'deduction_total':4000,
    'deduction_TDS':20,
    'deduction_ESI':0,
    'deduction_PF':0,
    'deduction_leave':0,
    'deduction_tax':0,
    'deduction_welfare':0,
    'deduction_fund':0,
    'deduction_loan':0,
    'deduction_others':0
  },
  {
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
  
  constructor() { }
}
