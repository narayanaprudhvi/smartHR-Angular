import { Component, OnInit } from '@angular/core';
import {IMyDpOptions} from 'mydatepicker';
import { AppService } from 'src/app/app.service';
import { Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-timingsheet-edit',
  templateUrl: './timingsheet-edit.component.html',
  styleUrls: ['./timingsheet-edit.component.css']
})
export class TimingsheetEditComponent implements OnInit {

  public myDatePickerOptions: IMyDpOptions = {
    todayBtnTxt: 'Today',
    dateFormat: 'dd-mm-yyyy',
    firstDayOfWeek: 'su',
    sunHighlight: true,
    inline: false,
    height: '38px',
    componentDisabled:true
  };

  public rows = [];
  public srch = [];
  uptSheetValidation:boolean = false;
  
  public uptS:any = [];

  constructor(private AppService:AppService,private route:ActivatedRoute,private router:Router) { 
    this.rows = AppService.timingsheet;
    this.srch = [...this.rows];
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      //console.log(params);
      this.uptS = [];
      if(params.id)
      {
        var id = params.id;
        var arr = this.rows.find(function(item, i){
          return item.sheet_id == id;
        });

        if(!arr)
        {
          this.router.navigate(['timing-sheet']);
        }
        else
        {
        this.uptS.push(arr);
        this.uptS = this.uptS[0];
        //console.log(this.uptS);
        }
      }
      else{
        this.router.navigate(['timing-sheet']);
      }
      
      
    });
  }

  updateSheet(f)
  {
    //console.log(f.form.value);
    if (f.invalid === true)
      this.uptSheetValidation = true;
    else {
      this.uptSheetValidation = false;
    var id = f.form.value.sheet_id;
    //console.log(id);

    var arr = this.rows.find(function(item, i){
      return item.sheet_id === id
    });

    arr.project = f.form.value.project;
    arr.hours_today = f.form.value.hours_today;
    arr.description = f.form.value.description;
    
    var index = this.rows.findIndex(function(item, i){
      return item.sheet_id === id
    });

    //console.log(index);
    if (index > -1) {
        this.rows.splice(index, 1);
    }
    
    this.rows.unshift(arr);
    this.srch.unshift(arr);
    this.rows = this.rows;
    this.router.navigate(['timing-sheet']);
  }
  }

}
