import { Component, OnInit } from '@angular/core';

declare const $:any;

@Component({
  selector: 'app-settingsroles',
  templateUrl: './settingsroles.component.html',
  styleUrls: ['./settingsroles.component.css']
})
export class SettingsrolesComponent implements OnInit {

  public addR:any = [];

  rows = [
    {'role_name':'Administrator'},
    {'role_name':'Manager'},
    {'role_name':'HR'}
  ];
  srch = [];

  constructor() { 
    this.srch = [...this.rows];
  }

  ngOnInit() {
  }

  addRole(f)
  {
    //console.log(f.form.value);
      this.rows.push(f.form.value);
      this.srch.push(f.form.value);
      this.rows = this.rows;
      $('#add_role').modal('hide');
  }

  onDelete(c){
    //console.log("="+c.role_name+"=");
    var index = this.rows.findIndex(function(item, i){
      return item.role_name === c.role_name
    });

    //console.log(index);
    if (index > -1) {
        this.rows.splice(index, 1);
        this.srch.splice(index, 1);
    }        
    //console.log(this.rows);
    this.rows = this.rows;
  }

}
