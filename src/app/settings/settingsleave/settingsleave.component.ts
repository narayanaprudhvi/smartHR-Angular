import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service'

declare const $:any;

@Component({
  selector: 'app-settingsleave',
  templateUrl: './settingsleave.component.html',
  styleUrls: ['./settingsleave.component.css']
})
export class SettingsleaveComponent implements OnInit {

  public rows = [];
  public srch = [];
  
  public addLT:any = {};
  public uptLT:any = {};
  
  constructor(private leaveService:AppService) { 
    this.rows = leaveService.leaveType;
    this.srch = [...this.rows];
  }

  ngOnInit() {
    $('.floating').on('focus blur', function (e) {
      $(this).parents('.form-focus').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
    }).trigger('blur');
  }

  addReset(){
    let randomnumber = Math.floor(Math.random() * 500);
    this.addLT = {'id':randomnumber};
    $('#add_leavetype').modal('show');
  }

  addLeavetype(f)
  {
    //console.log(f.form.value);
    f.form.value.status = 'Active';
    this.rows.unshift(f.form.value);
    this.srch.unshift(f.form.value);
    this.rows = this.rows;
    $('#add_leavetype').modal('hide');
   
  }

  onEdit(item){
    this.uptLT = item;
    $('#edit_leavetype').modal('show');
  }

  updateLeavetype(f)
  {
    //console.log(f.form.value);
    var id = f.form.value.id;
    //console.log(id);
    var arr = this.rows.find(function(item, i){
      return item.id === id
    });

    arr.id = f.form.value.id;
    arr.leave_type = f.form.value.leave_type;
    arr.leave_days = f.form.value.leave_days;
    
    var index = this.rows.findIndex(function(item, i){
      return item.id === id
    });

    //console.log(index);
    if (index > -1) {
        this.rows.splice(index, 1);
    }

    this.rows.unshift(arr);
    this.srch.unshift(arr);
    this.rows = this.rows;
    $('#edit_leavetype').modal('hide');
  
  }

  onDelete(c){
    //console.log("="+c.id+"=");
    var index = this.rows.findIndex(function(item, i){
      return item.id === c.id
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
