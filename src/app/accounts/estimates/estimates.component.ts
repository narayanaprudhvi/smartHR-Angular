import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { IMyDpOptions } from 'mydatepicker';
import { Router,ActivatedRoute } from '@angular/router';
import { AccServiceService } from '../acc-service.service';

declare const $:any;

@Component({
  selector: 'app-estimates',
  templateUrl: './estimates.component.html',
  styleUrls: ['./estimates.component.css']
})
export class EstimatesComponent implements OnInit {

  
  public myDatePickerOptions: IMyDpOptions = {
    todayBtnTxt: 'Today',
    dateFormat: 'dd-mm-yyyy',
    firstDayOfWeek: 'su',
    sunHighlight: true,
    inline: false,
    height: '48px',
    //disableUntil: {year: 2016, month: 8, day: 10}
  };

  public myDatePickerOptions1: IMyDpOptions = {
    todayBtnTxt: 'Today',
    dateFormat: 'dd-mm-yyyy',
    firstDayOfWeek: 'su',
    sunHighlight: true,
    inline: false,
    height: '38px',
    
  };

  public rows = [];

  public srch = [];
  public addE = {
    'est_number':'0007',
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
  public uptE:any = [];

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

  constructor(private router:Router,private accService:AccServiceService,public fb: FormBuilder) { 
    this.rows = accService.estimate;
    this.srch = [...this.rows];
  }

  ngOnInit() {
    $('.floating').on('focus blur', function (e) {
      $(this).parents('.form-focus').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
    }).trigger('blur');

    this.uptE = {
      'est_number':'',
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
  }

  onView(index)
  {
    this.router.navigate(['accounts/estimates/details'], { queryParams: { 'id': index } });
  }

  addEstimate(f)
  {
    //console.log(f.form.value);
    f.form.value.est_number = 7;
    f.form.value.items = <FormArray>this.createForm.controls.fieldArray.value;
    this.rows.unshift(f.form.value);
    this.srch.unshift(f.form.value);
    this.rows = this.rows;
    $('#add_estimate').modal('hide');
  }

  onEdit(res){
    let temp;
    //console.log(res);
    temp = res;
    this.uptE = temp;

    const control = <FormArray>this.editForm.controls.fieldArray;
    while (control.length !== 0) {
      control.removeAt(0)
    }

    //console.log(this.uptE);
    //console.log(this.uptE['items']);
    const items = this.uptE['items'];
    for ( let i in items)
    {
      //console.log(items)
      control.push(this.formUptEdit(items[i]['item'],items[i]['description'],items[i]['unitcost'],items[i]['quantity'],items[i]['amount']));
    }
    $('#edit_estimate').modal('show');
  }

  updateEstimate(f)
  {
    //console.log(this.editForm.value.fieldArray);
    //console.log(f.form.value);
    var id = f.form.value.est_number;
    //console.log(id);
    var arr = this.rows.find(function(item, i){
      return item.est_number === id
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
      return item.est_number === id
    });

    //console.log(arr);
    if (index > -1) {
        this.rows.splice(index, 1);
    }
    
    this.rows.unshift(arr);
    this.srch.unshift(arr);
    this.rows = this.rows;
    //console.log(this.rows);
    
    $('#edit_estimate').modal('hide');
  }

  onDelete(c){
    var index = this.rows.findIndex(function(item, i){
      return item.est_number === c.est_number
    });

    //console.log(index);
    if (index > -1) {
        this.rows.splice(index, 1);
        this.srch.splice(index, 1);
    }        
    //console.log(this.rows);
    this.rows = this.rows;
  }

  searchStatus(val) {
    //console.log(val);
    //console.log(this.srch);
    this.rows.splice(0, this.rows.length);
    //console.log(this.rows);
    let temp = this.srch.filter(function(d) {
      //console.log(d.status);
      val = val.toLowerCase();
      return d.status.toLowerCase().indexOf(val) !== -1 || !val;
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

  addItemC(): void {
    const control = <FormArray>this.createForm.controls.fieldArray;
    control.push(this.formUptAdd());
  };

  removeItemC(value): void {
    //console.log(value)
    const control = <FormArray>this.createForm.controls.fieldArray;
    control.removeAt(value);
  };

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
    //console.log(this.uptE);

    let totalAmount = 0;
    for (let i in control.value) {
      //console.log(control.value[i].amount);
      totalAmount = totalAmount + control.value[i].amount;
    }
    this.uptE['item_total'] = totalAmount;

    let tax = this.uptE['item_tax'];
    let grand_total = this.uptE['grand_total'];
    let dis = this.uptE['item_discount'];

    grand_total = (totalAmount * tax/100 + totalAmount) - totalAmount * dis/100;

    this.uptE['grand_total'] = grand_total;
    
  }

  getQtyC(i)
  {
    //console.log("index"+i);
    //console.log(this.createForm.value.fieldArray);
    let control = <FormArray>this.createForm.controls.fieldArray;
    control.at(i).get('amount').setValue(this.createForm.value.fieldArray[i].quantity * this.createForm.value.fieldArray[i].unitcost);
     //console.log(this.addE);

    let totalAmount = 0;
    for (let i in control.value) {
      //console.log(control.value[i].amount);
      totalAmount = totalAmount + control.value[i].amount;
    }
    this.addE['item_total'] = totalAmount;

    let tax = 0;
    let grand_total = 0;
    let dis = 0;//this.addE['item_discount'];

    grand_total = (totalAmount * tax/100 + totalAmount) - totalAmount * dis/100;
    this.addE['item_tax'] = tax;
    this.addE['grand_total'] = grand_total;
    
  }

  getDis(d)
  {
    let totalAmount = this.uptE['item_total'] 
    
    let tax = this.uptE['item_tax'];
    let grand_total = this.uptE['grand_total'];
    let dis = this.uptE['item_discount'];

    grand_total = (totalAmount * tax/100 + totalAmount) - totalAmount * dis/100;

    this.uptE['grand_total'] = grand_total;
  }

  getDisC(d)
  {
    let totalAmount = this.addE['item_total'] 
    
    let tax = this.addE['item_tax'];
    let grand_total = this.addE['grand_total'];
    let dis = this.addE['item_discount'];

    grand_total = (totalAmount * tax/100 + totalAmount) - totalAmount * dis/100;

    this.addE['grand_total'] = grand_total;
  }

  // quantityUpdate(field,i){
  //   //console.log(field+" "+i)
  //   //console.log(this.fieldArrays);
  //   this.fieldArrays[i].item = field.item;
  //   this.fieldArrays[i].description = field.description;
  //   this.fieldArrays[i].unitcost = field.unitcost;
  //   this.fieldArrays[i].quantity = field.quantity;
  //   //this.fieldArrays[i].amount = field.amount;

  //   this.fieldArrays = [...this.fieldArrays];
  //   //console.log(this.fieldArrays);
  // }

}
