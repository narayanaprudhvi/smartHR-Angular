import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { isEmpty } from 'rxjs/operators';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {

  public rows = [];

  public srch = [];
  public uptD:any;
  uptDepartmentValidation:boolean = false;
  
  constructor(private appService:AppService,private router:Router,private route:ActivatedRoute) { 
    this.rows = appService.departments;
    //console.log(this.rows);
    this.srch = [...this.rows];
    
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      //console.log(params);
      this.uptD = [];
      if(params.id)
      {
        var id = params.id;
        const arr = this.rows.find(function(item, i){
          return item.department_id == id;
        });
        if(!arr)
        {
        this.uptD = {};
        this.router.navigate(['employees/departments']);
        }
        else
        {
        this.uptD.push(arr);
        this.uptD = this.uptD[0];
        //console.log(this.uptD);
        }
      }
      else{
        this.router.navigate(['employees/departments']);
      }
      
      
    });
  }

  updateDepartment(f){
    //console.log(f);
    
    if (f.invalid === true)
      this.uptDepartmentValidation = true;
    else {
      this.uptDepartmentValidation = false;
    var id = f.form.value.department_id;
    //console.log(id);
    var index = this.rows.findIndex(function(item, i){
      return item.department_id === id
    });

    //console.log(index);
    if (index > -1) {
        this.rows.splice(index, 1);
    }
    
    this.uptD = f.form.value;
    this.rows.unshift(f.form.value);
    this.srch.unshift(f.form.value);
    this.rows = this.rows;
    this.router.navigate(['employees/departments']);
    }
  }

}
