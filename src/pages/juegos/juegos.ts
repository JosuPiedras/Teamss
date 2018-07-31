import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddgamePage } from '../addgame/addgame';

import { FirebaseproviderProvider } from '../../providers/firebaseprovider/firebaseprovider'
import { Observable } from 'rxjs/Observable';
/**
 * Generated class for the JuegosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-juegos',
  templateUrl: 'juegos.html',
})
export class JuegosPage {
  public juegos: Observable<any[]>;
  constructor(public fbp: FirebaseproviderProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.juegos = fbp.obtener_juegos().valueChanges(); 
    // = [
    //   [{name:"DTD", Goles:3}, {name:"Compas", Goles:5}],
    //   [{ name: "Compas", Goles: 4 }, { name: "Login", Goles: 2 }],
    //   [{ name: "DTD", Goles: 1 }, { name: "XD", Goles: 3 }],
    //   [{ name: "DTD", Goles: 2 }, { name: "Compas", Goles: 2 }]
    // ];
  }

  goToOtherPage() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(AddgamePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JuegosPage');
  }

}
