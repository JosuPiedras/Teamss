import { Component } from '@angular/core';

/**
 * Generated class for the PuntuacionesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'puntuaciones',
  templateUrl: 'puntuaciones.html'
})
export class PuntuacionesComponent {

  text: string;

  constructor() {
    console.log('Hello PuntuacionesComponent Component');
    this.text = 'Hello World';
  }

}
