import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { AccServiceService } from '../acc-service.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {

  rows = [];

  constructor(private router:Router,private accService:AccServiceService) { 
    this.rows = accService.invoice;
  }
  
  ngOnInit() {
  }

  onView(index)
  {
    this.router.navigate(['accounts/payments/details'], { queryParams: { 'id': index } });
  }

}
