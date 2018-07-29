import { Component } from '@angular/core';

/**
 * Generated class for the EquiposComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'equipos',
  templateUrl: 'equipos.html'
})
export class EquiposComponent {

  text: string;

  constructor() {
    console.log('Hello EquiposComponent Component');
    this.text = 'Hello World';
  }

}
