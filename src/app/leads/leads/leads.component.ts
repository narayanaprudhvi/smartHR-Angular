import { Component, OnInit } from '@angular/core';

declare const $:any;

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.css']
})
export class LeadsComponent implements OnInit {

  public rows = [
    {
      'leadID':'L-001',
      'leadName':'Wilmer Deluna',
      'email':'wilmerdeluna@gmail.com',
      'phone':'9812873465',
      'project':'Harvey Clinic',
      'status':'Active',
      'created':{formatted:"18-12-2014"}
    },
    {
      'leadID':'L-002',
      'leadName':'Lesley Grauer',
      'email':'lesleygrauer@gmail.com',
      'phone':'9812872365',
      'project':'Penabook',
      'status':'Active',
      'created':{formatted:"08-12-2014"}
    },
    {
      'leadID':'L-003',
      'leadName':'Jeffery Lalor',
      'email':'jeffreylalor@gmail.com',
      'phone':'9812873125',
      'project':'Food and Drinks',
      'status':'Active',
      'created':{formatted:"11-02-2014"}
    },
    {
      'leadID':'L-004',
      'leadName':'Wilmer Deluna',
      'email':'wilmerdeluna@gmail.com',
      'phone':'9812873465',
      'project':'Harvey Clinic',
      'status':'Active',
      'created':{formatted:"18-12-2014"}
    },
    {
      'leadID':'L-005',
      'leadName':'Lesley Grauer',
      'email':'lesleygrauer@gmail.com',
      'phone':'9812872365',
      'project':'Penabook',
      'status':'Active',
      'created':{formatted:"08-12-2014"}
    },
    {
      'leadID':'L-006',
      'leadName':'Jeffery Lalor',
      'email':'jeffreylalor@gmail.com',
      'phone':'9812873125',
      'project':'Food and Drinks',
      'status':'Active',
      'created':{formatted:"11-02-2014"}
    }
  ];

  public srch = [...this.rows];
  public uptL:any = [];

  constructor() { }

  ngOnInit() {
    $('.floating').on('focus blur', function (e) {
      $(this).parents('.form-focus').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
    }).trigger('blur');

    this.uptL = {
      'leadID':'',
      'leadName':'',
      'email':'',
      'phone':'',
      'project':'',
      'status':'',
      'created':''
    };
  }

  updateLead(f)
  {
    //console.log(f.form.value);
    var id = f.form.value.leadID;
    //console.log(id);

    var arr = this.rows.find(function(item, i){
      return item.leadID === id
    });

    arr.leadName = f.form.value.leadName;
    arr.status = f.form.value.status;
    arr.email = f.form.value.email;
    arr.phone = f.form.value.phone;
    arr.project = f.form.value.project;
    

    var index = this.rows.findIndex(function(item, i){
      return item.leadID === id
    });

    //console.log(index);
    if (index > -1) {
        this.rows.splice(index, 1);
    }
   
    this.rows.unshift(arr);
    this.srch.unshift(arr);
    this.rows = this.rows;
    $('#edit_lead').modal('hide');
    
  }

  onEdit(item){
    let temp;
    //console.log(item);
    temp = item;
    this.uptL = temp;
    $('#edit_lead').modal('show');
  }

  onDelete(item){
    var id = item.leadID;
    //console.log("="+id+"=");
  
    var index = this.rows.findIndex(function(item, i){
      return item.leadID === id
    });

    //console.log(index);
    if (index > -1) {
        this.rows.splice(index, 1);
        this.srch.splice(index, 1);
    }        
    //console.log(this.rows);
    this.rows = this.rows;
  }

  searchProject(val) {
    //console.log(val);
    //console.log(this.srch);
    this.rows.splice(0, this.rows.length);
    //console.log(this.rows);
    let temp = this.srch.filter(function(d) {
      //console.log(d.project);
      val = val.toLowerCase();
      return d.project.toLowerCase().indexOf(val) !== -1 || !val;
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
      //console.log(d.leadName);
      val = val.toLowerCase();
      return d.leadName.toLowerCase().indexOf(val) !== -1 || !val;
    });
    //console.log(temp);
    this.rows.push(...temp);
    //console.log(this.rows);
  }

  searchEmail(val) {
    //console.log(val);
    //console.log(this.srch);
    this.rows.splice(0, this.rows.length);
    //console.log(this.rows);
    let temp = this.srch.filter(function(d) {
      //console.log(d.email);
      val = val.toLowerCase();
      return d.email.toLowerCase().indexOf(val) !== -1 || !val;
    });
    //console.log(temp);
    this.rows.push(...temp);
    //console.log(this.rows);
  }

}
