import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AccServiceService } from '../acc-service.service';

@Component({
  selector: 'app-taxes-details',
  templateUrl: './taxes-details.component.html',
  styleUrls: ['./taxes-details.component.css']
})
export class TaxesDetailsComponent implements OnInit {

  public rows = [];

  public srch = [];
  public uptT:any = { 
  };

  //salaryUpt:boolean = false;
  uptTaxValidation:boolean = false;
    
  constructor(private router:Router,private accService:AccServiceService,private route:ActivatedRoute) { 
    this.rows = accService.taxes;
    this.srch = [...this.rows];
  }

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      //console.log(params);
      this.uptT = [];
      if(params.id)
      {
        var id = params.id;
        var arr = this.rows.find(function(item, i){
          return item.tax_id == id;
        });

        if(!arr)
        {
          this.router.navigate(['accounts/taxes']);
        }
        else
        {
        this.uptT.push(arr);
        this.uptT = this.uptT[0];
        //console.log(this.uptT);
        }
      }
      else{
        this.router.navigate(['accounts/taxes']);
      }
      
      
    });
  }

  
  updateTax(f) {
    //console.log(f.form.value);
    if (f.invalid === true)
      this.uptTaxValidation = true;
    else {
      this.uptTaxValidation = false;
      var id = f.form.value.tax_id;
      //console.log(id);
      var index = this.rows.findIndex(function (item, i) {
        return item.tax_id === id
      });

      //console.log(index);
      if (index > -1) {
        this.rows.splice(index, 1);
      }

      this.rows.unshift(f.form.value);
      this.srch.unshift(f.form.value);
      this.rows = this.rows;
      this.router.navigate(['accounts/taxes']);
    }
  }
}
