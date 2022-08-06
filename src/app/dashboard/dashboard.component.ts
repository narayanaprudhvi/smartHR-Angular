import { Component, OnInit, AfterContentInit } from '@angular/core';
import { IMyDpOptions } from 'mydatepicker';
import { AppService } from '../app.service';
import { Router, ActivatedRoute, Event, NavigationStart, NavigationEnd } from '@angular/router';

declare const $: any;
declare const Morris: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterContentInit {

  public myDatePickerOptions: IMyDpOptions = {
    todayBtnTxt: 'Today',
    dateFormat: 'yyyy-mm-dd',
    firstDayOfWeek: 'mo',
    sunHighlight: true,
    inline: false
  };

  public projects = [];
  public clients = [];
  public invoices = [];
  public payments = [];

  // Initialized to specific date (09.10.2018).
  public model: any = { date: { year: 2018, month: 10, day: 9 } };
  public dash: any = { 'projects': 112, 'clients': 44, 'tasks': 37, 'employees': 218 };

  constructor(private appService: AppService, private router: Router) {
    this.projects = appService.projects;
    this.clients = appService.clients;
    this.invoices = appService.invoices;
    this.payments = appService.payments;
  }

  ngAfterContentInit() {

  }

  ngOnInit() {

    var pro_heights = $(".panel-eqHeight-clients").map(function () {
      return $(this).height();
    }).get(),
      pro_maxHeight = Math.max.apply(null, pro_heights);
    $(".panel-eqHeight-projects").height(pro_maxHeight);
    $(".panel-eqHeight-clients").height(pro_maxHeight);

    var pay_heights = $(".panel-eqHeight-invoices").map(function () {
      return $(this).height();
    }).get(),
      pay_maxHeight = Math.max.apply(null, pay_heights);
    $(".panel-eqHeight-payments").height(pay_maxHeight);
    $(".panel-eqHeight-invoices").height(pay_maxHeight);

    // Area Chart
	
    Morris.Area({
      element: 'area-charts',
      data: [
        { y: '2006', a: 100, b: 90 },
        { y: '2007', a: 75,  b: 65 },
        { y: '2008', a: 50,  b: 40 },
        { y: '2009', a: 75,  b: 65 },
        { y: '2010', a: 50,  b: 40 },
        { y: '2011', a: 75,  b: 65 },
        { y: '2012', a: 100, b: 90 }
      ],
      xkey: 'y',
      ykeys: ['a', 'b'],
      labels: ['Total Invoice', 'Pending Invoice'],
      lineColors: ['#ff9b44','#fc6075'],
      lineWidth: '3px',
      resize: true,
      redraw: true
      });
  
    // Bar Chart
    
    Morris.Bar({
      element: 'bar-charts',
      data: [
        { y: '2006', a: 100, b: 90 },
        { y: '2007', a: 75,  b: 65 },
        { y: '2008', a: 50,  b: 40 },
        { y: '2009', a: 75,  b: 65 },
        { y: '2010', a: 50,  b: 40 },
        { y: '2011', a: 75,  b: 65 },
        { y: '2012', a: 100, b: 90 }
      ],
      xkey: 'y',
      ykeys: ['a', 'b'],
      labels: ['Total Income', 'Total Outcome'],
      lineColors: ['#ff9b44','#fc6075'],
      lineWidth: '3px',
      barColors: ['#ff9b44','#fc6075'],
      resize: true,
      redraw: true
    });
    
    // Line Chart
    
    Morris.Line({
      element: 'line-charts',
      data: [
        { y: '2006', a: 50, b: 90 },
        { y: '2007', a: 75,  b: 65 },
        { y: '2008', a: 50,  b: 40 },
        { y: '2009', a: 75,  b: 65 },
        { y: '2010', a: 50,  b: 40 },
        { y: '2011', a: 75,  b: 65 },
        { y: '2012', a: 100, b: 50 }
      ],
      xkey: 'y',
      ykeys: ['a', 'b'],
      labels: ['Total Sales', 'Total Revenue'],
      lineColors: ['#ff9b44','#fc6075'],
      lineWidth: '3px',
      resize: true,
      redraw: true
    });
    
    // Donut Chart
      
    Morris.Donut({
      element: 'pie-charts',
      colors: [
        '#ff9b44',
        '#fc6075',
        '#ffc999',
        '#fd9ba8'
      ],
      data: [
        {label: "Employees", value: 30},
        {label: "Clients", value: 15},
        {label: "Projects", value: 45},
        {label: "Tasks", value: 10}
      ],
      resize: true,
      redraw: true
    });

  }

}
