import { Component, OnInit } from '@angular/core';
import { IMyDpOptions } from 'mydatepicker';
import { AccServiceService } from '../acc-service.service';
import { Router } from '@angular/router';

declare const $: any;

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {

  rows = [];
  public srch = [];
  public addEx:any = [];
  public uptEx:any = [];
  addExpenseValidation: boolean = false;

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

  constructor(private accService: AccServiceService, private router: Router) {
    this.rows = accService.expense;
    this.srch = [...this.rows];
  }

  ngOnInit() {

    $('.floating').on('focus blur', function (e) {
      $(this).parents('.form-focus').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
    }).trigger('blur');

    this.addEx = {
      'expenseID':'',
      'item':'',
      'purchase_from':'',
      'purchase_date':'',
      'pur_date':'',
      'purchased_by':'',
      'amount':0,
      'paid_by':'',
      'status':''
    };
    
    this.uptEx = {
      'expenseID':'',
      'item':'',
      'purchase_from':'',
      'purchase_date':'',
      'pur_date':'',
      'purchased_by':'',
      'amount':0,
      'paid_by':'',
      'status':''
    };
  }

  addExpense(f) {
    let randomnumber = Math.floor(Math.random() * 99);
    f.form.value.expenseID = randomnumber;
    if (f.invalid === true)
      this.addExpenseValidation = true;
    else {
      this.addExpenseValidation = false;
      //console.log(f.form.value);
      this.rows.unshift(f.form.value);
      this.srch.unshift(f.form.value);
      this.rows = this.rows;
      $('#add_expense').modal('hide');
    }
  }

  onEdit(item) {
    //console.log(item);
    this.router.navigate(['accounts/expenses/edit'], { queryParams: { 'id': item.expenseID } });
  }

  onDelete(c) {
    //console.log("=" + c.expenseID + "=");
    var index = this.rows.findIndex(function (item, i) {
      return item.expenseID === c.expenseID
    });

    //console.log(index);
    if (index > -1) {
      this.rows.splice(index, 1);
      this.srch.splice(index, 1);
    }
    //console.log(this.rows);
    this.rows = this.rows;
  }

  searchItem(val) {
    //console.log(val);
    //console.log(this.srch);
    this.rows.splice(0, this.rows.length);
    //console.log(this.rows);
    let temp = this.srch.filter(function (d) {
      //console.log(d.item);
      val = val.toLowerCase();
      return d.item.toLowerCase().indexOf(val) !== -1 || !val;
    });
    //console.log(temp);
    this.rows.push(...temp);
    //console.log(this.rows);
  }

  searchPurBy(val) {
    //console.log(val);
    //console.log(this.srch);
    this.rows.splice(0, this.rows.length);
    //console.log(this.rows);
    let temp = this.srch.filter(function (d) {
      //console.log(d.purchased_by);
      val = val.toLowerCase();
      return d.purchased_by.toLowerCase().indexOf(val) !== -1 || !val;
    });
    //console.log(temp);
    this.rows.push(...temp);
    //console.log(this.rows);
  }

  searchPaidBy(val) {
    //console.log(val);
    //console.log(this.srch);
    this.rows.splice(0, this.rows.length);
    //console.log(this.rows);
    let temp = this.srch.filter(function (d) {
      //console.log(d.paid_by);
      val = val.toLowerCase();
      return d.paid_by.toLowerCase().indexOf(val) !== -1 || !val;
    });
    //console.log(temp);
    this.rows.push(...temp);
    //console.log(this.rows);
  }

}
