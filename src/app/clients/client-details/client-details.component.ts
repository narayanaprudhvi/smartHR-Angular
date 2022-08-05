import { Component, OnInit } from '@angular/core';
import {IMyDpOptions} from 'mydatepicker';
import { AppService } from 'src/app/app.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {

  public myDatePickerOptions: IMyDpOptions = {
    todayBtnTxt: 'Today',
    dateFormat: 'dd-mm-yyyy',
    firstDayOfWeek: 'su',
    sunHighlight: true,
    inline: false,
    height: '48px'
  };

  public rows = [];
  public srch = [];
  
  public uptC:any;

  uptClientValidation:boolean = false;

  constructor(private clientService:AppService,private router:Router,private route:ActivatedRoute) { 
    this.rows = clientService.clients;
    this.srch = [...this.rows];
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      //console.log(params);
      this.uptC = [];
      if(params.id)
      {
        var id = params.id;
        const arr = this.rows.find(function(item, i){
          return item.clientID == id;
        });
        if(!arr)
        {
        this.uptC = {};
        this.router.navigate(['clients']);
        }
        else
        {
        this.uptC.push(arr);
        this.uptC = this.uptC[0];
        //console.log('------------' + this.uptC);
        }
      }
      else{
        this.router.navigate(['clients']);
      }
      
      
    });
  }

  updateClient(f)
  {
    //console.log(f.form.value);
    if (f.invalid === true)
      this.uptClientValidation = true;
    else 
    {
      this.uptClientValidation = false;
    var id = f.form.value.clientID;
    //console.log(id);
    var index = this.rows.findIndex(function(item, i){
      return item.clientID === id
    });

    //console.log(index);
    if (index > -1) {
        this.rows.splice(index, 1);
    }
    
    this.rows.unshift(f.form.value);
    this.srch.unshift(f.form.value);
    this.rows = this.rows;
    this.router.navigate(['clients']);
    }
  }

}
