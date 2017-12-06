import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {

  names: [{name: string}]= [{name: 'Sanil'}, {name: 'Mandira'}, {name: 'Shambhu'}, {name: 'Sun Keshari'}];
  constructor() { }

  ngOnInit() {
  }

}
