import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-designation-details',
  templateUrl: './designation-details.component.html',
  styleUrls: ['./designation-details.component.css']
})
export class DesignationDetailsComponent implements OnInit {

  rows = [];

  public srch = [];
  public uptD:any = [];
  uptDesignationValidation:boolean = false;
  
  constructor(private appService:AppService,private router:Router,private route:ActivatedRoute) { 
    this.rows = appService.designations;
    this.srch = [...this.rows];
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      //console.log(params);
      this.uptD = [];
      if(params.id)
      {
        var id = params.id;
        var arr = this.rows.find(function(item, i){
          return item.designation_id == id;
        });

        if(!arr)
        {
          this.router.navigate(['employees/designations']);
        }
        else
        {
        this.uptD.push(arr);
        this.uptD = this.uptD[0];
        //console.log(this.uptD);
        }
      }
      else{
        this.router.navigate(['employees/designations']);
      }
      
      
    });
  }

  updateDesignation(f){
    //console.log(f);
    if (f.invalid === true)
    this.uptDesignationValidation = true;
    else 
    {
    this.uptDesignationValidation = false;
    var id = f.form.value.designation_id;
    //console.log(id);
    var index = this.rows.findIndex(function(item, i){
      return item.designation_id === id
    });

    //console.log(index);
    if (index > -1) {
        this.rows.splice(index, 1);
    }
    //console.log(this.rows);
    
    this.uptD = f.form.value;
    this.rows.unshift(f.form.value);
    this.srch.unshift(f.form.value);
    this.rows = this.rows;
    this.router.navigate(['employees/designations']);
  }
  }
}
