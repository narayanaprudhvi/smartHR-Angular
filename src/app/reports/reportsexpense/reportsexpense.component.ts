import { Component, OnInit } from '@angular/core';
import { IMyDpOptions } from 'mydatepicker';
import { AccServiceService } from '../../accounts/acc-service.service';
import { Router } from '@angular/router';

declare const $:any;

@Component({
  selector: 'app-reportsexpense',
  templateUrl: './reportsexpense.component.html',
  styleUrls: ['./reportsexpense.component.css']
})
export class ReportsexpenseComponent implements OnInit {

  rows = [];
  public srch = [];
  public addEx = [];
  public uptEx = [];

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
  
}
