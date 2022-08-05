import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import {IMyDpOptions} from 'mydatepicker';
import { Router,ActivatedRoute } from '@angular/router';
import { AccServiceService } from '../acc-service.service';

declare const $:any;

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {

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

  addInvoiceValidation:boolean = false;
  public rows = [];
  public srch = [];
  public addV = {
    'inv_number':'0007',
    'client':'',
    'est_date':{formatted:'18-09-2018'},
    'exp_date':{formatted:'18-09-2018'},
    'status':'',
    'est_ID':'',
    'project':'',
    'email':'',
    'tax_type':'',
    'client_address':'',
    'billing_address':'',
    'item_discount':0,
    'item_total':0,
    'grand_total':0,
    'item_tax':0,
    'other_info':''
  };

  createForm = new FormGroup({
    fieldArray: this.fb.array([this.fb.group({
      'item' : new FormControl('',Validators.required),
      'description' : new FormControl('',Validators.required),
      'unitcost' :new FormControl('',Validators.required),
      'quantity' :new FormControl(0,Validators.required),
      'amount' :new FormControl(0,Validators.required)
    })
    ]),
  });
  
  constructor(private router:Router,private accService:AccServiceService,public fb: FormBuilder) { 
    this.rows = accService.invoice;
    this.srch = [...this.rows];
  }

  ngOnInit() {
    $('.floating').on('focus blur', function (e) {
      $(this).parents('.form-focus').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
    }).trigger('blur');

  }

  onView(index)
  {
    this.router.navigate(['accounts/invoices/details'], { queryParams: { 'id': index } });
  }

  addInvoice(f)
  {
    //console.log(f.form.value);
    let randomnumber = Math.floor(Math.random()*99);
    f.form.value.inv_number = randomnumber;
    f.form.value.items = <FormArray>this.createForm.controls.fieldArray.value;
    if (f.invalid === true)
      this.addInvoiceValidation = true;
    else 
    {
      this.addInvoiceValidation = false;
    this.rows.unshift(f.form.value);
    this.srch.unshift(f.form.value);
    this.rows = this.rows;
    $('#add_invoice').modal('hide');
    }
  }

  onEdit(res){
    
    this.router.navigate(['accounts/invoices/edit'], { queryParams: { 'id': res.inv_number } });
  }

  
  onDelete(c){
    var index = this.rows.findIndex(function(item, i){
      return item.inv_number === c
    });

    //console.log(index);
    if (index > -1) {
        this.rows.splice(index, 1);
        this.srch.splice(index, 1);
    }        
    //console.log(this.rows);
    this.rows = this.rows;
  }

  searchClient(val) {
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

  formUptAdd()
  {
  return this.fb.group({
    'item' : new FormControl('',Validators.required),
    'description' : new FormControl('',Validators.required),
    'unitcost' :new FormControl('',Validators.required),
    'quantity' :new FormControl(0,Validators.required),
    'amount' :new FormControl(0,Validators.required)
  })
  }

  addItemC(): void {
    const control = <FormArray>this.createForm.controls.fieldArray;
    control.push(this.formUptAdd());
  };

  removeItemC(value): void {
    //console.log(value)
    const control = <FormArray>this.createForm.controls.fieldArray;
    control.removeAt(value);
  };

  getQtyC(i)
  {
    //console.log("index"+i);
    //console.log(this.createForm.value.fieldArray);
    let control = <FormArray>this.createForm.controls.fieldArray;
    control.at(i).get('amount').setValue(this.createForm.value.fieldArray[i].quantity * this.createForm.value.fieldArray[i].unitcost);
     //console.log(this.addV);

    let totalAmount = 0;
    for (let i in control.value) {
      //console.log(control.value[i].amount);
      totalAmount = totalAmount + control.value[i].amount;
    }
    this.addV['item_total'] = totalAmount;

    let tax = 0;
    let grand_total = 0;
    let dis = 0;

    grand_total = (totalAmount * tax/100 + totalAmount) - totalAmount * dis/100;
    this.addV['item_tax'] = tax;
    this.addV['grand_total'] = grand_total;
    
  }

  getDisC(d)
  {
    let totalAmount = this.addV['item_total'] 
    
    let tax = this.addV['item_tax'];
    let grand_total = this.addV['grand_total'];
    let dis = this.addV['item_discount'];

    grand_total = (totalAmount * tax/100 + totalAmount) - totalAmount * dis/100;

    this.addV['grand_total'] = grand_total;
  }


}
