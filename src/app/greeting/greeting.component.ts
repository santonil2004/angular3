import { Person } from './../interfaces/person/person';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})

export class GreetingComponent implements OnInit {

  @Input() user: Person;

  constructor() { }

  ngOnInit() {
  }

}
