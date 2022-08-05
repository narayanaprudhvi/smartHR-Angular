import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { AccServiceService } from '../acc-service.service';

@Component({
  selector: 'app-invoice-details',
  templateUrl: './invoice-details.component.html',
  styleUrls: ['./invoice-details.component.css']
})
export class InvoiceDetailsComponent implements OnInit {

  rows = [];
  viewI:any = [];

 invoice_optV : boolean = false;

 constructor(private route: ActivatedRoute,private router:Router,private accService:AccServiceService) { 
  this.rows = accService.invoice;
 }
 
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
