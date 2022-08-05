import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { AccServiceService } from '../acc-service.service';

declare const $:any;

@Component({
  selector: 'app-provident-fund',
  templateUrl: './provident-fund.component.html',
  styleUrls: ['./provident-fund.component.css']
})
export class ProvidentFundComponent implements OnInit {

  rows = [];
  
  public srch = [];
  public addPF:any = {};
  public uptPF = [];
  addFundValidation:boolean = false;
  uptFundValidation:boolean = false;

  constructor(private router:Router,private accService:AccServiceService) { 
    this.rows = accService.provident_fund;
    this.srch = [...this.rows];
  }

  ngOnInit() {

  }

  addFundReset()
  {
    this.addPF = {};
    this.addFundValidation = false;
    $('#add_pf').modal('show');
  }

  addFund(f)
  {
    //console.log(f);
    if (f.invalid === true)
      this.addFundValidation = true;
    else 
    {
      this.addFundValidation = false;
      let randomnumber = Math.floor(Math.random()*99);
      f.form.value.fund_id = randomnumber;
      //console.log(f.form.value);
      this.rows.unshift(f.form.value);
      this.srch.unshift(f.form.value);
      this.rows = this.rows;
      $('#add_pf').modal('hide');
    }
  }

  onEdit(item){
    this.router.navigate(['accounts/provident-fund/edit'], { queryParams: { 'id': item.fund_id } });
  }

  onDelete(c){
    //console.log("="+c.fund_id+"=");
    var index = this.rows.findIndex(function(item, i){
      return item.fund_id === c.fund_id
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
