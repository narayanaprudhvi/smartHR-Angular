import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.css']
})
export class JobsListComponent implements OnInit {

  public rows = [
    {
      'job_title':'Web Developer',
      'job_type': 'Part Time',
      'designation':'Development'
    },
    {
      'job_title':'Android Developer',
      'job_type': 'Part Time',
      'designation':'Development'
    },
    {
      'job_title':'Android Developer',
      'job_type': 'Full Time',
      'designation':'Android Development'
    },
    {
      'job_title':'Front End Developer',
      'job_type': 'Part Time',
      'designation':'Deployment'
    },
    {
      'job_title':'IOS Developer',
      'job_type': 'Full Time',
      'designation':'IOS Development'
    },
    {
      'job_title':'Web Developer',
      'job_type': 'Part Time',
      'designation':'Development'
    },
    {
      'job_title':'Angular Developer',
      'job_type': 'Full Time',
      'designation':'Angular Development'
    },
    {
      'job_title':'Angular Developer',
      'job_type': 'Full Time',
      'designation':'Angular Development'
    }
  ]
  
  constructor() { }

  ngOnInit() {
    //console.log(this.rows)
  }

}
