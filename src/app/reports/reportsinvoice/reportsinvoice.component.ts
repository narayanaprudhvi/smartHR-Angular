import { Component, OnInit } from '@angular/core';
import { IMyDpOptions } from 'mydatepicker';
import { AccServiceService } from '../../accounts/acc-service.service';
import { Router } from '@angular/router';

declare const $:any;

@Component({
  selector: 'app-reportsinvoice',
  templateUrl: './reportsinvoice.component.html',
  styleUrls: ['./reportsinvoice.component.css']
})
export class ReportsinvoiceComponent implements OnInit {

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

  public rows = [];
  public srch = [];
  
  
  constructor(private router:Router,private accService:AccServiceService) { 
    this.rows = accService.invoice;
    this.srch = [...this.rows];
  }

  ngOnInit() {
    $('.floating').on('focus blur', function (e) {
      $(this).parents('.form-focus').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
    }).trigger('blur');

  }

  onEdit(res){
    
    this.router.navigate(['accounts/invoices/edit'], { queryParams: { 'id': res.inv_number } });
  }

  onView(index)
  {
    this.router.navigate(['accounts/invoices/details'], { queryParams: { 'id': index } });
  }

  onDelete(c){
    //console.log(c);
    var index = this.rows.findIndex(function(item, i){
      return item.inv_number === c
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
