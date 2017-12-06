import { Person } from '../interfaces/person/person';
import { Component, OnInit, Input } from '@angular/core';
import { PEOPLE } from '../interfaces/person/person';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  people = PEOPLE;

  personName: Person;

  constructor() {
   }


   addPerson(personName) {
     this.people.push({name: personName});
   }

  ngOnInit() {
  }

}
