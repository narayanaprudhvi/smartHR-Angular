import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/app.service';

declare const $:any;

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  rows = [];
  
  public srch = [];
  public addC:any = {};
  addContactValidation:boolean = false;

  constructor(private appService:AppService,private router:Router) { 
    this.rows = appService.contacts;
    this.srch = [...this.rows];
  }

  ngOnInit() {
  }

  addReset(){
    this.addC = {
        'contactName':'',
        'number':'',
        'email':'',
        'designation':'',
        'status':'active'
    };
    $('#add_contact').modal('show');
  }

  addContact(f)
  {
    //console.log(f.form.value);
    let randomnumber = Math.floor(Math.random() * 99);
    f.form.value.contactID = randomnumber;
    if (f.invalid === true)
      this.addContactValidation = true;
    else 
    {
      this.addContactValidation = false;
      if(f.form.value.status == true ) f.form.value.status = 'Active';
      if(f.form.value.status == false ) f.form.value.status = 'Inactive';
      this.rows.unshift(f.form.value);
      this.srch.unshift(f.form.value);
      this.rows = this.rows;
      $('#add_contact').modal('hide');
    }
  }

  onEdit(item){
    this.router.navigate(['contacts/edit'], { queryParams: { 'id': item.contactID } });
  }

  onDelete(c){
    //console.log("="+c.contactID+"=");
    var index = this.rows.findIndex(function(item, i){
      return item.contactID === c.contactID
    });

    //console.log(index);
    if (index > -1) {
        this.rows.splice(index, 1);
        this.srch.splice(index, 1);
    }        
    //console.log(this.rows);
    this.rows = this.rows;
  }

  searchName(val) {
    //console.log(val);
    //console.log(this.srch);
    this.rows.splice(0, this.rows.length);
    //console.log(this.rows);
    let temp = this.srch.filter(function(d) {
      //console.log(d.contactName);
      val = val.toLowerCase();
      return d.contactName.toLowerCase().indexOf(val) !== -1 || !val;
    });
    //console.log(temp);
    this.rows.push(...temp);
    //console.log(this.rows);
  }

}
