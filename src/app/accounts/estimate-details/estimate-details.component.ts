import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { AccServiceService } from '../acc-service.service';


@Component({
  selector: 'app-estimate-details',
  templateUrl: './estimate-details.component.html',
  styleUrls: ['./estimate-details.component.css']
})
export class EstimateDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute,private router:Router,private accService:AccServiceService) { 
    this.rows = accService.estimate;
  }

  rows = [];
  viewE = [];

 estimate_id;
 estimate_view;
 estimate_optV : boolean = false;
 
  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      //console.log(params);
      this.viewE = [];
      if(params.id)
      {
        var id = params.id;
        var arr = this.rows.find(function(item, i){
          return item.est_number == id;
        });
        if(!arr)
        {
        this.router.navigate(['accounts/estimates']);
        }
        else
        {
        this.viewE.push(arr);
        this.estimate_optV = true;
        this.viewE = this.viewE[0];
        //console.log(this.viewE);
        }
        
      }
      else{
        this.router.navigate(['accounts/estimates']);
      }
      
     
    });
  }

}
