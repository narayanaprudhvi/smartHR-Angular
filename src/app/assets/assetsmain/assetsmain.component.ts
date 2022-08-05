import { Component, OnInit } from '@angular/core';
import {IMyDpOptions} from 'mydatepicker';
import { AppService } from 'src/app/app.service';

declare const $:any;

@Component({
  selector: 'app-assetsmain',
  templateUrl: './assetsmain.component.html',
  styleUrls: ['./assetsmain.component.css']
})
export class AssetsmainComponent implements OnInit {

  public myDatePickerOptions: IMyDpOptions = {
    todayBtnTxt: 'Today',
    dateFormat: 'dd-mm-yyyy',
    firstDayOfWeek: 'su',
    sunHighlight: true,
    inline: false,
    height: '48px'
  };

  public myDatePickerOptions1: IMyDpOptions = {
    todayBtnTxt: 'Today',
    dateFormat: 'dd-mm-yyyy',
    firstDayOfWeek: 'su',
    sunHighlight: true,
    inline: false,
    height: '38px'
  };

  public rows = [];
  public srch = [];
  
  public addA:any = {};
  public uptA:any = [];
  
  constructor(private assetService:AppService) { 
    this.rows = assetService.assets;
    this.srch = [...this.rows];
  }


  ngOnInit() {
    $('.floating').on('focus blur', function (e) {
      $(this).parents('.form-focus').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
    }).trigger('blur');

    this.addA = {
      'asset_user': '',
      'asset_id': '',
      'asset_name' : '',
      'purchase_date': '',
      'end_date': '',
      'amount': 0
    };
    
    this.uptA = {
      'asset_user': '',
      'asset_id': '',
      'asset_name' : '',
      'purchase_date': '',
      'end_date': '',
      'amount': 0
    };
  }

  addReset(){
    let randomnumber = Math.floor(Math.random() * 300);
    this.addA = {'asset_id':randomnumber};
    $('#add_asset').modal('show');
  }

  addAsset(f)
  {
    //console.log(f.form.value);
    if (f.invalid === false)
    {
    this.rows.unshift(f.form.value);
    this.srch.unshift(f.form.value);
    this.rows = this.rows;
    $('#add_asset').modal('hide');
    }
  }

  onEdit(item){
    this.uptA = item;
    $('#edit_asset').modal('show');
  }

  updateAsset(f)
  {
    //console.log(f.form.value);
    if (f.invalid === false)
    {
    var id = f.form.value.asset_id;
    //console.log(id);
    var arr = this.rows.find(function(item, i){
      return item.asset_id === id
    });

    arr.asset_id = f.form.value.asset_id;
    arr.asset_user = f.form.value.asset_user;
    arr.asset_name = f.form.value.asset_name;
    arr.puchase_date = f.form.value.puchase_date;
    arr.end_date = f.form.value.end_date;
    arr.amount = f.form.value.amount;    

    var index = this.rows.findIndex(function(item, i){
      return item.asset_id === id
    });

    //console.log(index);
    if (index > -1) {
        this.rows.splice(index, 1);
    }

    this.rows.unshift(arr);
    this.srch.unshift(arr);
    this.rows = this.rows;
    $('#edit_asset').modal('hide');
  }
  }

  onDelete(c){
    //console.log("="+c.asset_id+"=");
    var index = this.rows.findIndex(function(item, i){
      return item.asset_id === c.asset_id
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
