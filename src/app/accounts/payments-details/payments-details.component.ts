import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { AccServiceService } from '../acc-service.service';

@Component({
  selector: 'app-payments-details',
  templateUrl: './payments-details.component.html',
  styleUrls: ['./payments-details.component.css']
})
export class PaymentsDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute,private router:Router,private accService:AccServiceService) { 
    this.rows = accService.invoice;
  }

  rows = [];
  viewI:any = [];

 invoice_id;
 invoice_optV : boolean = false;
 
  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      //console.log(params);
      this.viewI = [];
      if(params.id)
      {
        var id = params.id;
        var arr = this.rows.find(function(item, i){
          return item.inv_number == id;
        });

        if(!arr)
        {
          this.router.navigate(['accounts/invoices']);
        }
        else
        {
        this.viewI.push(arr);
        this.invoice_optV = true;
        this.viewI = this.viewI[0];
        //console.log(this.viewI);
        }
        
      }
      else{
        this.router.navigate(['accounts/invoices']);
      }
      
      
    });
  }

}
