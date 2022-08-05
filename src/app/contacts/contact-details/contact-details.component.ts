import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  rows = [];
  
  public srch = [...this.rows];
  public uptC:any = [];
  uptContactValidation:boolean = false;

  constructor(private appService:AppService,private router:Router,private route:ActivatedRoute) { 
    this.rows = appService.contacts;
    this.srch = [...this.rows];
  }
  
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      //console.log(params);
      this.uptC = [];
      if(params.id)
      {
        var id = params.id;
        var arr = this.rows.find(function(item, i){
          return item.contactID == id;
        });

        if(!arr)
        {
          this.router.navigate(['contacts']);
        }
        else
        {
        this.uptC.push(arr);
        this.uptC = this.uptC[0];
        //console.log(this.uptC);
        }
      }
      else{
        this.router.navigate(['contacts']);
      }
      
      
    });
  }

  updateContact(f)
  {
    //console.log(f.form.value);
    if (f.invalid === true)
      this.uptContactValidation = true;
    else 
    {
      this.uptContactValidation = false;
      if(f.form.value.status == true ) f.form.value.status = 'Active';
      if(f.form.value.status == false ) f.form.value.status = 'Inactive';
      var id = f.form.value.contactID;
      //console.log(id);
      var index = this.rows.findIndex(function(item, i){
        return item.contactID === id
      });

      //console.log(index);
      if (index > -1) {
          this.rows.splice(index, 1);
      }
    
      this.rows.unshift(f.form.value);
      this.srch.unshift(f.form.value);
      this.rows = this.rows;
      this.router.navigate(['contacts']);
    }
  }

}
