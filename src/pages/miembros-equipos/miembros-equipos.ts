import { Component } from '@angular/core';

/**
 * Generated class for the MiembrosEquiposComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'miembros-equipos',
  templateUrl: 'miembros-equipos.html'
})
export class MiembrosEquiposComponent {

  text: string;

  constructor() {
    console.log('Hello MiembrosEquiposComponent Component');
    this.text = 'Hello World';
  }

}
