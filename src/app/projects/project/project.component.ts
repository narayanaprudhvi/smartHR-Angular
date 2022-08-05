import { Component, OnInit } from '@angular/core';
import {IMyDpOptions} from 'mydatepicker';
import { AppService } from 'src/app/app.service';

declare const $:any;

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  public myDatePickerOptions: IMyDpOptions = {
    todayBtnTxt: 'Today',
    dateFormat: 'dd-mm-yyyy',
    firstDayOfWeek: 'su',
    sunHighlight: true,
    inline: false,
    height: '38px'
  };

  public rows = [];
  public srch = [];
  public allProjects:boolean = true;
  public deadline:boolean = false;
  public addP:any = [];
  public uptP:any = [];
  public viewP:any = [];
  
  constructor(private projectService:AppService) { 
    this.rows = projectService.projects;
    this.srch = [...this.rows];
  }

  ngOnInit() {

    $('.floating').on('focus blur', function (e) {
      $(this).parents('.form-focus').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
    }).trigger('blur');

    for(var i=0;i<this.rows.length;i++)
    {
      this.rows[i].description = this.rows[i].description.split(/\s+/).slice(0,25).join(" ");
    }

    this.addP = {
      'projectName':'',
      'projectID':'',
      'role':'',
      'leader': '',
      'deadline': '',
      'description': '',
      'cost':'',
      'rate':'',
      'totalHours':'',
      'createdOn': '',
      'createdBy': '',
      'status': '',
      'priority':'',
      'progress':0,
      'client':'',
      'startDate':'',
      'endDate':''
    };

    this.uptP = {
      'projectName':'',
      'projectID':'',
      'role':'',
      'leader': '',
      'deadline': '',
      'description': '',
      'cost':'',
      'rate':'',
      'totalHours':'',
      'createdOn': '',
      'createdBy': '',
      'status': '',
      'priority':'',
      'progress':0,
      'client':'',
      'startDate':'',
      'endDate':''
    };

    this.uptP = {
      'projectName':'',
      'description': ''
    };

  }

  
  addProject(f)
  {
    //console.log(f.form.value);
    f.form.value.deadline = {formatted: "17-01-2018"};
    f.form.value.description = f.form.value.description.split(/\s+/).slice(0,25).join(" ");
    this.rows.unshift(f.form.value);
    this.srch.unshift(f.form.value);
    this.rows = this.rows;
    $('#create_project').modal('hide');
  }

  updateProject(f)
  {
    //console.log(f.form.value);
    f.form.value.description = f.form.value.description.split(/\s+/).slice(0,25).join(" ");
    var id = f.form.value.projectID;
    //console.log(id);
    var arr = this.rows.find(function(item, i){
      return item.projectID === id
    });

    arr.client = f.form.value.client;
    arr.cost = f.form.value.cost;
    arr.leader = f.form.value.leader;
    arr.description = f.form.value.description;
    arr.rate = f.form.value.rate;
    arr.projectName = f.form.value.projectName;
    arr.startDate = f.form.value.startDate;
    arr.endDate = f.form.value.endDate;
    arr.priority = f.form.value.priority;

    var index = this.rows.findIndex(function(item, i){
      return item.projectID === id
    });

    //console.log(index);
    if (index > -1) {
        this.rows.splice(index, 1);
    }
    this.rows = this.rows;

    this.rows.unshift(arr);
    this.srch.unshift(arr);
    this.rows = this.rows;
    $('#edit_project').modal('hide');
    
  }

  onEdit(item){
    let temp;
    //console.log(item);
    temp = item;
    this.uptP = temp;
  }

  editView(id){
    let temp;
    //console.log(id);
    temp = this.rows.find(function(item, i){
      return item.projectID === id
    });
    this.uptP = temp;
    $('#view_project').modal('hide');
    $('#edit_project').modal('show');
  }

  onDelete(c){
    //console.log("="+c.projectID+"=");
    var index = this.rows.findIndex(function(item, i){
      return item.projectID === c.projectID
    });

    //console.log(index);
    if (index > -1) {
        this.rows.splice(index, 1);
        this.srch.splice(index, 1);
    }        
    //console.log(this.rows);
    this.rows = this.rows;
  }

  searchPName(val) {
    //console.log(val);
    //console.log(this.srch);
    this.rows.splice(0, this.rows.length);
    //console.log(this.rows);
    let temp = this.srch.filter(function(d) {
      //console.log(d.projectName);
      val = val.toLowerCase();
      return d.projectName.toLowerCase().indexOf(val) !== -1 || !val;
    });
    //console.log(temp);
    this.rows.push(...temp);
    //console.log(this.rows);
  }

  searchEName(val) {
    //console.log(val);
    //console.log(this.srch);
    this.rows.splice(0, this.rows.length);
    //console.log(this.rows);
    let temp = this.srch.filter(function(d) {
      //console.log(d.client);
      val = val.toLowerCase();
      return d.client.toLowerCase().indexOf(val) !== -1 || !val;
    });
    //console.log(temp);
    this.rows.push(...temp);
    //console.log(this.rows);
  }

  searchRole(val) {
    //console.log(val);
    //console.log(this.srch);
    this.rows.splice(0, this.rows.length);
    //console.log(this.rows);
    let temp = this.srch.filter(function(d) {
      //console.log(d.role);
      val = val.toLowerCase();
      return d.role.toLowerCase().indexOf(val) !== -1 || !val;
    });
    //console.log(temp);
    this.rows.push(...temp);
    //console.log(this.rows);
  }

  viewProfile(item)
  {
    this.deadline = true;
    let temp;
    //console.log(item);
    temp = item;
    this.viewP = temp;
  }

  
}
