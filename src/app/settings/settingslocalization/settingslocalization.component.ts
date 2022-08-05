import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settingslocalization',
  templateUrl: './settingslocalization.component.html',
  styleUrls: ['./settingslocalization.component.css']
})
export class SettingslocalizationComponent implements OnInit {

  public uptL =
  {
    'default_country':'USA',
    'date_format':'d M Y',
    'timezone' : '(UTC +5:30) Antarctica/Palmer',
    'default_language' : 'English',
    'currency_code' : 'USD',
    'currency_symbol' : '$'
  };

  uptLocalization:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  updateLocalization(f)
  {
    //console.log(f.form.value);
    let json = JSON.stringify(f.form.value);
    json = json.replace(/,/g,', ');
    //console.log(json);
    // $('#json_string').html(json);
    this.uptLocalization = true;
  }
}
