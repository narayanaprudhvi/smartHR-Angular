import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settingscompany',
  templateUrl: './settingscompany.component.html',
  styleUrls: ['./settingscompany.component.css']
})
export class SettingscompanyComponent implements OnInit {

  public uptC =
  {
    'company_name':'Focus Technologies',
    'contact_person':'Daniel Porter',
    'address' : '3434 quiet valley lane, sherman oaks ca, 94344',
    'country' : 'USA',
    'city' : 'Sherman Oaks',
    'state' : 'California',
    'postal_code' : '98988',
    'email' : 'danielporter@example.com',
    'phone_number' : '9878187102',
    'mobile_number' : '7051403258',
    'fax' : '8189875527',
    'url' : 'www.wxample.com'
  };

  uptCompany:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  updateCompany(f)
  {
    //console.log(f.form.value);
    let json = JSON.stringify(f.form.value);
    json = json.replace(/,/g,', ');
    //console.log(json);
    // $('#json_string').html(json);
    this.uptCompany = true;
  }
}
