import { Component } from '@angular/core';

/**
 * Generated class for the VerpuntuacionesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'verpuntuaciones',
  templateUrl: 'verpuntuaciones.html'
})
export class VerpuntuacionesComponent {

  text: string;

  constructor() {
    console.log('Hello VerpuntuacionesComponent Component');
    this.text = 'Hello World';
  }

}
