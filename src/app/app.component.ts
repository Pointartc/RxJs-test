import {Component} from '@angular/core';
import {} from 'rxjs';
import {} from 'rxjs/operators';
import {people} from '../shared/interface'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  people = [
    {name: 'one', age: 1,},
    {name: 'one', age: 1,},
    {name: 'one', age: 1,},
    {name: 'one', age: 1,},
    {name: 'one', age: 1,},
    {name: 'one', age: 1,},
    {name: 'one', age: 1,},
    {name: 'one', age: 1,},
    {name: 'one', age: 1,},
    {name: 'one', age: 1,},
    {name: 'one', age: 1,},
    {name: 'one', age: 1,}
  ]
  constructor() {
    console.log(this.people);
  }
}
