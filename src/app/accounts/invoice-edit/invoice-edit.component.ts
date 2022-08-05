import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import {IMyDpOptions} from 'mydatepicker';
import { Router,ActivatedRoute } from '@angular/router';
import { AccServiceService } from '../acc-service.service';

declare const $:any;

@Component({
  selector: 'app-invoice-edit',
  templateUrl: './invoice-edit.component.html',
  styleUrls: ['./invoice-edit.component.css']
})
export class InvoiceEditComponent implements OnInit {

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

  public uptV:any = [];
  uptInvoiceValidation:boolean = false;
  
  editForm = new FormGroup({
    fieldArray: this.fb.array([this.fb.group({
      'item' : new FormControl('',Validators.required),
      'description' : new FormControl('',Validators.required),
      'unitcost' :new FormControl('',Validators.required),
      'quantity' :new FormControl(0,Validators.required),
      'amount' :new FormControl(0,Validators.required)
    })
    ]),
  });

  constructor(private route:ActivatedRoute,private router:Router,private accService:AccServiceService,public fb: FormBuilder) { 
    this.rows = accService.invoice;
    this.srch = [...this.rows];
  }

  ngOnInit() {
    $('.floating').on('focus blur', function (e) {
      $(this).parents('.form-focus').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
    }).trigger('blur');

    this.route.queryParams.subscribe(params => {
      //console.log(params);
      this.uptV = [];
      if(params.id)
      {
        var id = params.id;
        var arr = this.rows.find(function(item, i){
          return item.inv_number == id;
        });

        if(!arr)
        {
          this.router.navigate(['accounts/invoices']);
        }
        else
        {
          this.uptV.push(arr);
          this.uptV = this.uptV[0];
          //console.log(this.uptV);
          const control = <FormArray>this.editForm.controls.fieldArray;
          while (control.length !== 0) {
            control.removeAt(0)
          }

          //console.log(this.uptV);
          //console.log(this.uptV['items']);
          const items = this.uptV['items'];
          for ( let i in items)
          {
            //console.log(items)
            control.push(this.formUptEdit(items[i]['item'],items[i]['description'],items[i]['unitcost'],items[i]['quantity'],items[i]['amount']));
          }
        }
        
      }
      else{
        this.router.navigate(['accounts/invoices']);
      }
      
      
    });

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

  formUptEdit(item,description,unitcost,quantity,amount)
  {
  return this.fb.group({
    'item' : new FormControl(item),
    'description' : new FormControl(description),
    'unitcost' :new FormControl(unitcost),
    'quantity' :new FormControl(quantity),
    'amount' :new FormControl(amount)
  })
  }

  addItem(): void {
    const control = <FormArray>this.editForm.controls.fieldArray;
    control.push(this.formUptAdd());
  };

  removeItem(value): void {
    //console.log(value)
    const control = <FormArray>this.editForm.controls.fieldArray;
    control.removeAt(value);
  };

  updateInvoice(f)
  {
    //console.log(this.editForm.value.fieldArray);
    //console.log(f.form.value);
    var id = f.form.value.inv_number;
    //console.log(id);
    if (f.invalid === true)
      this.uptInvoiceValidation = true;
    else 
    {
      this.uptInvoiceValidation = false;
    var arr = this.rows.find(function(item, i){
      return item.inv_number === id
    });

    arr.client = f.form.value.client;
    arr.est_date.formatted = f.form.value.est_date.formatted;
    arr.exp_date.formatted = f.form.value.exp_date.formatted;
    arr.grand_total = f.form.value.grand_total;
    arr.item_total = f.form.value.item_total;
    arr.item_tax = f.form.value.item_tax;
    arr.item_discount = f.form.value.item_discount;
    arr.client_address = f.form.value.client_address;
    arr.billing_address = f.form.value.billing_address;
    arr.items = <FormArray>this.editForm.controls.fieldArray.value;
    
    var index = this.rows.findIndex(function(item, i){
      return item.inv_number === id
    });

    //console.log(arr);
    if (index > -1) {
        this.rows.splice(index, 1);
    }
    
    this.rows.unshift(arr);
    this.srch.unshift(arr);
    this.rows = this.rows;
    //console.log(this.rows);
    
    this.router.navigate(['accounts/invoices']);
  }
  }

  resetItemValue(i): void{
    let control = <FormArray>this.editForm.controls.fieldArray;
    control.at(i).get('amount').setValue(0);
    control.at(i).get('quantity').setValue(0);
    control.at(i).get('unitcost').setValue('');
    control.at(i).get('description').setValue('');
    control.at(i).get('item').setValue('');
  }

  getQty(i)
  {
    //console.log("index"+i);
    //console.log(this.editForm.value.fieldArray);
    let control = <FormArray>this.editForm.controls.fieldArray;
    control.at(i).get('amount').setValue(this.editForm.value.fieldArray[i].quantity * this.editForm.value.fieldArray[i].unitcost);
    //console.log(this.editForm.value.fieldArray);
    //console.log(this.uptV);

    let totalAmount = 0;
    for (let i in control.value) {
      //console.log(control.value[i].amount);
      totalAmount = totalAmount + control.value[i].amount;
    }
    this.uptV['item_total'] = totalAmount;

    let tax = this.uptV['item_tax'];
    let grand_total = this.uptV['grand_total'];
    let dis = this.uptV['item_discount'];

    grand_total = (totalAmount * tax/100 + totalAmount) - totalAmount * dis/100;

    this.uptV['grand_total'] = grand_total;
    
  }

  getDis(d)
  {
    let totalAmount = this.uptV['item_total'] 
    
    let tax = this.uptV['item_tax'];
    let grand_total = this.uptV['grand_total'];
    let dis = this.uptV['item_discount'];

    grand_total = (totalAmount * tax/100 + totalAmount) - totalAmount * dis/100;

    this.uptV['grand_total'] = grand_total;
  }

}
