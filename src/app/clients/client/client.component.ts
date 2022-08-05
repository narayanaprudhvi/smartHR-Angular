import { Component, OnInit } from '@angular/core';
import {IMyDpOptions} from 'mydatepicker';
import { AppService } from 'src/app/app.service';
import { Router,ActivatedRoute } from '@angular/router';

declare const $:any;

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  public myDatePickerOptions: IMyDpOptions = {
    todayBtnTxt: 'Today',
    dateFormat: 'dd-mm-yyyy',
    firstDayOfWeek: 'su',
    sunHighlight: true,
    inline: false,
    height: '48px'
  };

  public allClients:boolean = true;
  public rows = [];

  public srch = [];
  
  public addC:any = {};
  public uptC = [];
  public viewP = [];
  public uptP = [];
  addClientValidation:boolean = false;

  constructor(private clientService:AppService,private router:Router) { 
    this.rows = clientService.clients;
    this.srch = [...this.rows];
  }

  ngOnInit() {

    $('.floating').on('focus blur', function (e) {
      $(this).parents('.form-focus').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
    }).trigger('blur');

  }

  addReset(){
    let randomnumber = Math.floor(Math.random() * 99);
    this.addC = {'clientID':randomnumber};
    $('#add_client').modal('show');
  }

  addClient(f)
  {
    //console.log(f.form.value);
    if (f.invalid === true)
      this.addClientValidation = true;
    else 
    {
      this.addClientValidation = false;
    f.form.value.status = 'Active';
    this.rows.unshift(f.form.value);
    this.srch.unshift(f.form.value);
    this.rows = this.rows;
    $('#add_client').modal('hide');
    }
  }

  onEdit(item){
    this.router.navigate(['clients/edit'], { queryParams: { 'id': item.clientID } });
  }

  onDelete(c){
    //console.log("="+c.clientID+"=");
    var index = this.rows.findIndex(function(item, i){
      return item.clientID === c.clientID
    });

    //console.log(index);
    if (index > -1) {
        this.rows.splice(index, 1);
        this.srch.splice(index, 1);
    }        
    //console.log(this.rows);
    this.rows = this.rows;
  }

  searchID(val) {
    //console.log(val);
    val = val.toString();
    //console.log(this.srch);
    this.rows.splice(0, this.rows.length);
    //console.log(this.rows);
    let temp = this.srch.filter(function(d) {
      //console.log(d.clientID);
      d.clientID = d.clientID.toString();
      return d.clientID.indexOf(val) !== -1 || !val;
    });
    //console.log(temp);
    this.rows.push(...temp);
    //console.log(this.rows);
  }

  searchName(val) {
    //console.log(val);
    //console.log(this.srch);
    this.rows.splice(0, this.rows.length);
    //console.log(this.rows);
    let temp = this.srch.filter(function(d) {
      //console.log(d.contactPerson);
      val = val.toLowerCase();
      return d.contactPerson.toLowerCase().indexOf(val) !== -1 || !val;
    });
    //console.log(temp);
    this.rows.push(...temp);
    //console.log(this.rows);
  }

  searchCompany(val) {
    //console.log(val);
    //console.log(this.srch);
    this.rows.splice(0, this.rows.length);
    //console.log(this.rows);
    let temp = this.srch.filter(function(d) {
      //console.log(d.companyName);
      val = val.toLowerCase();
      return d.companyName.toLowerCase().indexOf(val) !== -1 || !val;
    });
    //console.log(temp);
    this.rows.push(...temp);
    //console.log(this.rows);
  }

  viewProfile(item)
  {
    this.router.navigate(['clients/profile/details'], { queryParams: { 'id': item.clientID } });
  }
  
}
