import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AccServiceService } from '../acc-service.service';

@Component({
  selector: 'app-provident-fund-details',
  templateUrl: './provident-fund-details.component.html',
  styleUrls: ['./provident-fund-details.component.css']
})
export class ProvidentFundDetailsComponent implements OnInit {

  rows = [];
  
  public srch = [];
  public uptPF:any = [];
  uptFundValidation:boolean = false;

  constructor(private router:Router,private accService:AccServiceService,private route:ActivatedRoute) { 
    this.rows = accService.provident_fund;
    this.srch = [...this.rows];
  }
  

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      //console.log(params);
      this.uptPF = [];
      if(params.id)
      {
        var id = params.id;
        var arr = this.rows.find(function(item, i){
          return item.fund_id == id;
        });

        if(!arr)
        {
          this.router.navigate(['accounts/provident-fund']);
        }
        else
        {
        this.uptPF.push(arr);
        this.uptPF = this.uptPF[0];
        //console.log(this.uptPF);
        }
      }
      else{
        this.router.navigate(['accounts/provident-fund']);
      }
      
      
    });
  }

  updateFund(f)
  {
    if (f.invalid === true)
      this.uptFundValidation = true;
    else 
    {
      this.uptFundValidation = false;
      //console.log(f.form.value);
      var id = f.form.value.fund_id;
      //console.log(id);
      var index = this.rows.findIndex(function(item, i){
        return item.fund_id === id
      });

      //console.log(index);
      if (index > -1) {
          this.rows.splice(index, 1);
      }
    
      this.rows.unshift(f.form.value);
      this.srch.unshift(f.form.value);
      this.rows = this.rows;
      this.router.navigate(['accounts/provident-fund']);
    }
  }

}
