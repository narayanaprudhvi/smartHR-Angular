import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

declare const $:any;

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  public rows = [];

  public srch = [];
  public addD:any = {};
  addDepartmentValidation:boolean = false;
  
  constructor(private appService:AppService,private router:Router,private route:ActivatedRoute) { 
    this.rows = appService.departments;
    this.srch = [...this.rows];
    
  }

  ngOnInit() {
  }

  addReset(){
    this.addD = {'department': ''};
    $('#add_department').modal('show');
  }

  addDepartment(f){
    //console.log(f);
    let randomnumber = Math.floor(Math.random() * 99);
    f.form.value.department_id = randomnumber;
    if (f.invalid === true)
    this.addDepartmentValidation = true;
    else {
    this.addDepartmentValidation = false;
    this.rows.unshift(f.form.value);
    this.srch.unshift(f.form.value);
    this.rows = this.rows;
    $('#add_department').modal('hide');
    }
  }

  onEdit(item){
    //console.log(item);
    this.router.navigate(['employees/departments/edit'], { queryParams: { 'id': item.department_id } });
  }

  onDelete(id){
    //console.log("="+id+"=");
  
    var index = this.rows.findIndex(function(item, i){
      return item.department === id
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
