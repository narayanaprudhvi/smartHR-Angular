import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client-profile-details',
  templateUrl: './client-profile-details.component.html',
  styleUrls: ['./client-profile-details.component.css']
})
export class ClientProfileDetailsComponent implements OnInit {

  public rows = [];
  public srch = [];
  
  public viewP:any;

  constructor(private clientService:AppService,private router:Router,private route:ActivatedRoute) { 
    this.rows = clientService.clients;
    this.srch = [...this.rows];
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      //console.log(params);
      this.viewP = [];
      if(params.id)
      {
        var id = params.id;
        const arr = this.rows.find(function(item, i){
          return item.clientID == id;
        });
        if(!arr)
        {
        this.viewP = {};
        this.router.navigate(['clients/profile/details']);
        }
        else
        {
        this.viewP.push(arr);
        this.viewP = this.viewP[0];
        //console.log(this.viewP);
        }
      }
      else{
        this.router.navigate(['clients/profile/details']);
      }
   });
  }

  onEdit(id){
    this.router.navigate(['clients/profile/edit'], { queryParams: { 'id': id } });
  }
  
}
