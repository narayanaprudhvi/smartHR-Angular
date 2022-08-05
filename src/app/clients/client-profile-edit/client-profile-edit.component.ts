import { Component, OnInit } from '@angular/core';
import {IMyDpOptions} from 'mydatepicker';
import { AppService } from 'src/app/app.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client-profile-edit',
  templateUrl: './client-profile-edit.component.html',
  styleUrls: ['./client-profile-edit.component.css']
})
export class ClientProfileEditComponent implements OnInit {

  public myDatePickerOptions: IMyDpOptions = {
    todayBtnTxt: 'Today',
    dateFormat: 'dd-mm-yyyy',
    firstDayOfWeek: 'su',
    sunHighlight: true,
    inline: false,
    height: '48px'
  };

  uptClientProfileValidation:boolean = false;
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
        this.router.navigate(['clients']);
        }
        else
        {
        this.viewP.push(arr);
        this.viewP = this.viewP[0];
        //console.log(this.viewP);
        }
        
      }
      else{
        this.router.navigate(['clients']);
      }
      
      
    });
  }

  updateProfile(f)
  {
    //console.log(f.form.value);
    if (f.invalid === true)
      this.uptClientProfileValidation = true;
    else 
    {
      this.uptClientProfileValidation = false;
    //console.log(f.form.value);
    var id = f.form.value.clientID;
    //console.log(id);
    var arr = this.rows.find(function(item, i){
      return item.clientID === id
    });

    arr.address = f.form.value.address;
    arr.birthday = f.form.value.birthday;
    arr.state = f.form.value.state;
    arr.country = f.form.value.country;
    arr.clientID = f.form.value.clientID;
    arr.gender = f.form.value.gender;
    arr.pincode = f.form.value.pincode;
    arr.firstName = f.form.value.firstName;
    arr.lastName = f.form.value.lastName;

    var index = this.rows.findIndex(function(item, i){
      return item.clientID === id
    });

    //console.log(index);
    if (index > -1) {
        this.rows.splice(index, 1);
    }
    
    //this.viewProfile(arr);

    this.rows.unshift(arr);
    this.srch.unshift(arr);
    this.rows = this.rows;
    this.router.navigate(['clients/profile/details'], { queryParams: { 'id': id } });
  }
  }

  // viewProfile(item)
  // {
  //   this.birthDate = true;
  //   let temp;
  //   //console.log(item);
  //   temp = item;
  //   this.viewP = temp;
  // }
  

}
