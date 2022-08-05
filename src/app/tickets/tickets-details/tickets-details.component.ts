import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tickets-details',
  templateUrl: './tickets-details.component.html',
  styleUrls: ['./tickets-details.component.css']
})
export class TicketsDetailsComponent implements OnInit {

  rows = [];
  srch = [];
  viewT:any = [];

  constructor(private appService:AppService,private router:Router,private route:ActivatedRoute) {
    this.rows = appService.tickets;
    this.srch = [...this.rows];
  } 

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      //console.log(params);
      this.viewT = [];
      if(params.id)
      {
        var id = params.id;
        var arr = this.rows.find(function(item, i){
          return item.ticket_id == id;
        });

        if(!arr)
        {
          this.router.navigate(['tickets']);
        }
        else
        {
        this.viewT.push(arr);
        this.viewT = this.viewT[0];
        //console.log(this.viewT);
        }
      }
      else{
        this.router.navigate(['tickets']);
      }
      
      
    });
  }

}
