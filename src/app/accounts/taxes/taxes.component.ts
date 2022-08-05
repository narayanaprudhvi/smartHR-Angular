import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AccServiceService } from '../acc-service.service';

declare const $: any;

@Component({
  selector: 'app-taxes',
  templateUrl: './taxes.component.html',
  styleUrls: ['./taxes.component.css']
})
export class TaxesComponent implements OnInit {

  rows = [];
  public srch = [];
  public addT:any = {};
  public uptT = [];
  addTaxValidation: boolean = false;
  
  constructor(private router: Router, private accService: AccServiceService) {
    this.rows = accService.taxes;
    this.srch = [...this.rows];
  }


  ngOnInit() {

  }

  addTaxReset()
  {
    this.addT = {};
    this.addTaxValidation = false;
    this.addT = this.resetAdd();
    $('#add_tax').modal('show');
  }

  resetAdd(){
    return {
      'tax_name':'',
      'tax_percentage':'',
      'status':''
    };
  }

  addTax(f) {
    let randomnumber = Math.floor(Math.random() * 99);
    f.form.value.tax_id = randomnumber;
    //console.log(f);
    if (f.invalid === true)
      this.addTaxValidation = true;
    else {
      this.addTaxValidation = false;
      //console.log(f.form.value);
      this.rows.unshift(f.form.value);
      this.srch.unshift(f.form.value);
      this.rows = this.rows;
      $('#add_tax').modal('hide');
    }
  }

  onEdit(id){
    //console.log(id);
    this.router.navigate(['accounts/taxes/edit'], { queryParams: { 'id': id } });
  }

  onDelete(c) {
    //console.log("=" + c.tax_id + "=");
    var index = this.rows.findIndex(function (item, i) {
      return item.tax_id === c.tax_id
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
