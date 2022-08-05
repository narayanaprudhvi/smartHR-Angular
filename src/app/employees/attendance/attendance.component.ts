import { Component, OnInit } from '@angular/core';

declare const $:any;

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {

  public arr:number = 31;
  days = []; 
 
  public rows:Array<any> = [
    {'name': 'John Doe', 'day1': 'on', 'day2': 'on', 'day3': 'on','day4': 'on', 'day5': 'on', 'day6': 'on', 'day7': 'on', 'day8': 'on', 'day9': 'on', 'day10': 'on',  'day11': 'on',  'day12': 'on',  'day13': 'on',  'day14': 'on',  'day15': 'on',  'day16': 'on', 'day17': 'on',  'day18': 'on',  'day19': 'on',   'day20': 'on',  'day21': 'on',   'day22': 'on',  'day23': 'on',  'day24': 'on',  'day25': 'on',  'day26': 'on',   'day27': 'on',   'day28': 'on',   'day29': 'on',   'day30': 'on',  'day31': 'on'},
    {'name': 'Richard Miles', 'day1': 'on', 'day2': 'on', 'day3': 'on','day4': 'on', 'day5': 'on', 'day6': 'on', 'day7': 'on', 'day8': 'on', 'day9': 'on', 'day10': 'on',  'day11': 'on',  'day12': 'on',  'day13': 'on',  'day14': 'on',  'day15': 'on',  'day16': 'on', 'day17': 'on',  'day18': 'on',  'day19': 'on',   'day20': 'on',  'day21': 'on',   'day22': 'on',  'day23': 'on',  'day24': 'on',  'day25': 'on',  'day26': 'on',   'day27': 'on',   'day28': 'on',   'day29': 'on',   'day30': 'on',  'day31': 'on'},
    {'name': 'John Smith', 'day1': 'on', 'day2': 'on', 'day3': 'on','day4': 'on', 'day5': 'off', 'day6': 'on', 'day7': 'on', 'day8': 'on', 'day9': 'on', 'day10': 'on',  'day11': 'on',  'day12': 'on',  'day13': 'on',  'day14': 'on',  'day15': 'on',  'day16': 'on', 'day17': 'on',  'day18': 'on',  'day19': 'on',   'day20': 'on',  'day21': 'on',   'day22': 'on',  'day23': 'on',  'day24': 'on',  'day25': 'on',  'day26': 'on',   'day27': 'on',   'day28': 'on',   'day29': 'on',   'day30': 'on',  'day31': 'on'},
    {'name': 'Mike Litrous', 'day1': 'on', 'day2': 'on', 'day3': 'on','day4': 'off', 'day5': 'off', 'day6': 'on', 'day7': 'on', 'day8': 'on', 'day9': 'on', 'day10': 'on',  'day11': 'on',  'day12': 'on',  'day13': 'on',  'day14': 'on',  'day15': 'on',  'day16': 'on', 'day17': 'on',  'day18': 'on',  'day19': 'on',   'day20': 'on',  'day21': 'on',   'day22': 'on',  'day23': 'on',  'day24': 'on',  'day25': 'on',  'day26': 'on',   'day27': 'on',   'day28': 'off',   'day29': 'on',   'day30': 'first-off',  'day31': 'on'},
    {'name': 'Wilmer Deluna', 'day1': 'off', 'day2': 'on', 'day3': 'on','day4': 'on', 'day5': 'on', 'day6': 'on', 'day7': 'on', 'day8': 'on', 'day9': 'on', 'day10': 'on',  'day11': 'on',  'day12': 'on',  'day13': 'on',  'day14': 'on',  'day15': 'on',  'day16': 'on', 'day17': 'on',  'day18': 'on',  'day19': 'on',   'day20': 'on',  'day21': 'on',   'day22': 'on',  'day23': 'on',  'day24': 'on',  'day25': 'on',  'day26': 'on',   'day27': 'on',   'day28': 'on',   'day29': 'on',   'day30': 'on',  'day31': 'on'},
    {'name': 'Jeffrey Warden', 'day1': 'on', 'day2': 'on', 'day3': 'on','day4': 'on', 'day5': 'on', 'day6': 'on', 'day7': 'on', 'day8': 'on', 'day9': 'on', 'day10': 'on',  'day11': 'on',  'day12': 'on',  'day13': 'on',  'day14': 'on',  'day15': 'on',  'day16': 'on', 'day17': 'on',  'day18': 'on',  'day19': 'on',   'day20': 'on',  'day21': 'on',   'day22': 'on',  'day23': 'on',  'day24': 'on',  'day25': 'on',  'day26': 'off',   'day27': 'on',   'day28': 'on',   'day29': 'on',   'day30': 'second-off',  'day31': 'on'},
    {'name': 'Bernardo Galaviz', 'day1': 'first-off', 'day2': 'on', 'day3': 'off','day4': 'on', 'day5': 'on', 'day6': 'on', 'day7': 'on', 'day8': 'on', 'day9': 'on', 'day10': 'on',  'day11': 'on',  'day12': 'on',  'day13': 'on',  'day14': 'on',  'day15': 'on',  'day16': 'on', 'day17': 'on',  'day18': 'on',  'day19': 'on',   'day20': 'on',  'day21': 'on',   'day22': 'on',  'day23': 'on',  'day24': 'on',  'day25': 'on',  'day26': 'on',   'day27': 'on',   'day28': 'on',   'day29': 'on',   'day30': 'on',  'day31': 'on'},
    {'name': 'Lesley grauer', 'day1': 'on', 'day2': 'on', 'day3': 'on','day4': 'off', 'day5': 'on', 'day6': 'on', 'day7': 'on', 'day8': 'on', 'day9': 'on', 'day10': 'on',  'day11': 'on',  'day12': 'on',  'day13': 'on',  'day14': 'on',  'day15': 'on',  'day16': 'on', 'day17': 'on',  'day18': 'on',  'day19': 'on',   'day20': 'on',  'day21': 'on',   'day22': 'on',  'day23': 'on',  'day24': 'on',  'day25': 'on',  'day26': 'on',   'day27': 'on',   'day28': 'on',   'day29': 'on',   'day30': 'on',  'day31': 'on'},
    {'name': 'Jeffrey Lalor', 'day1': 'second-off', 'day2': 'on', 'day3': 'on','day4': 'on', 'day5': 'on', 'day6': 'on', 'day7': 'on', 'day8': 'on', 'day9': 'on', 'day10': 'on',  'day11': 'on',  'day12': 'on',  'day13': 'on',  'day14': 'on',  'day15': 'on',  'day16': 'on', 'day17': 'on',  'day18': 'on',  'day19': 'on',   'day20': 'on',  'day21': 'on',   'day22': 'on',  'day23': 'on',  'day24': 'on',  'day25': 'on',  'day26': 'on',   'day27': 'on',   'day28': 'on',   'day29': 'on',   'day30': 'on',  'day31': 'second-off'},
    {'name': 'Loren Gatlin', 'day1': 'on', 'day2': 'on', 'day3': 'on','day4': 'on', 'day5': 'on', 'day6': 'on', 'day7': 'on', 'day8': 'on', 'day9': 'on', 'day10': 'on',  'day11': 'on',  'day12': 'on',  'day13': 'on',  'day14': 'on',  'day15': 'on',  'day16': 'on', 'day17': 'on',  'day18': 'on',  'day19': 'on',   'day20': 'on',  'day21': 'on',   'day22': 'on',  'day23': 'on',  'day24': 'on',  'day25': 'on',  'day26': 'off',   'day27': 'on',   'day28': 'off',   'day29': 'on',   'day30': 'on',  'day31': 'on'},
    {'name': 'Tarah Shrospsire', 'day1': 'on', 'day2': 'on', 'day3': 'on','day4': 'on', 'day5': 'on', 'day6': 'on', 'day7': 'on', 'day8': 'on', 'day9': 'on', 'day10': 'on',  'day11': 'on',  'day12': 'on',  'day13': 'on',  'day14': 'on',  'day15': 'on',  'day16': 'on', 'day17': 'on',  'day18': 'on',  'day19': 'on',   'day20': 'on',  'day21': 'on',   'day22': 'on',  'day23': 'on',  'day24': 'on',  'day25': 'on',  'day26': 'on',   'day27': 'on',   'day28': 'on',   'day29': 'on',   'day30': 'on',  'day31': 'on'},
    {'name': 'Richard Miles', 'day1': 'on', 'day2': 'on', 'day3': 'on','day4': 'on', 'day5': 'on', 'day6': 'on', 'day7': 'on', 'day8': 'on', 'day9': 'on', 'day10': 'on',  'day11': 'on',  'day12': 'on',  'day13': 'on',  'day14': 'on',  'day15': 'on',  'day16': 'on', 'day17': 'on',  'day18': 'on',  'day19': 'on',   'day20': 'on',  'day21': 'on',   'day22': 'on',  'day23': 'on',  'day24': 'on',  'day25': 'on',  'day26': 'on',   'day27': 'on',   'day28': 'on',   'day29': 'on',   'day30': 'on',  'day31': 'second-off'}
  ]

  public srch = [...this.rows];

  constructor() { }

  ngOnInit() {

    $('.floating').on('focus blur', function (e) {
      $(this).parents('.form-focus').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
    }).trigger('blur');

    for(let i = 0;i < this.arr; i++)
      this.days.push(i);

  }

  searchName(val) {
    //console.log(val);
    //console.log(this.srch);
    this.rows.splice(0, this.rows.length);
    //console.log(this.rows);
    let temp = this.srch.filter(function(d) {
      //console.log(d.name);
      val = val.toLowerCase();
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });
    //console.log(temp);
    this.rows.push(...temp);
    //console.log(this.rows);
  }

  searchFrom(val) {
    //console.log(val);
    //console.log(this.srch);
    this.rows.splice(0, this.rows.length);
    //console.log(this.rows);
    let temp = this.srch.filter(function(d) {
      //console.log(d.name);
      val = val.toLowerCase();
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });
    //console.log(temp);
    this.rows.push(...temp);
    //console.log(this.rows);
  }

  searchTo(val) {
    //console.log(val);
    //console.log(this.srch);
    this.rows.splice(0, this.rows.length);
    //console.log(this.rows);
    let temp = this.srch.filter(function(d) {
      //console.log(d.name);
      val = val.toLowerCase();
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });
    //console.log(temp);
    this.rows.push(...temp);
    //console.log(this.rows);
  }

}
