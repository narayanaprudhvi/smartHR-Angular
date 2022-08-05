import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { AccServiceService } from '../acc-service.service';
import {IMyDpOptions} from 'mydatepicker';

@Component({
  selector: 'app-expenses-details',
  templateUrl: './expenses-details.component.html',
  styleUrls: ['./expenses-details.component.css']
})
export class ExpensesDetailsComponent implements OnInit {

  rows = [];
  public srch = [];
  public uptEx:any = [];
  uptExpenseValidation:boolean = false;

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

  constructor(private accService:AccServiceService,private route:ActivatedRoute,private router:Router) { 
    this.rows = accService.expense;
    this.srch = [...this.rows];
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      //console.log(params);
      this.uptEx = [];
      if(params.id)
      {
        var id = params.id;
        var arr = this.rows.find(function(item, i){
          return item.expenseID == id;
        });

        if(!arr)
        {
          this.router.navigate(['accounts/expenses']);
        }
        else
        {
          this.uptEx.push(arr);
          this.uptEx = this.uptEx[0];
          //console.log(this.uptEx);
        }
        
      }
      else{
        this.router.navigate(['accounts/expenses']);
      }
      
      
    });
  }

  updateExpense(f)
  {
    if (f.invalid === true)
      this.uptExpenseValidation = true;
    else 
    {
      this.uptExpenseValidation = false;
    //console.log(f.form.value);
    var id = f.form.value.expenseID;
    //console.log(id);
    var index = this.rows.findIndex(function(item, i){
      return item.expenseID === id
    });

    //console.log(index);
    if (index > -1) {
        this.rows.splice(index, 1);
    }
   
    this.rows.unshift(f.form.value);
    this.srch.unshift(f.form.value);
    this.rows = this.rows;
    this.router.navigate(['accounts/expenses']);
    }
  }

}
