import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GoleadoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-goleadores',
  templateUrl: 'goleadores.html',
})
export class GoleadoresPage {
  public players = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.players = [
      {name:"Josu Rocas", team:"DTD Mancos", goles:5},
      { name: "Perrengiel", team: "DTD Mancos", goles: 4 },
      { name: "Mega Blaziken", team: "DTD Mancos", goles: 4 },
      { name: "Agrippa", team: "Compas", goles: 6 },
      { name: "Relleno 1", team: "XD", goles: 1 },
      { name: "Relleno 2", team: "Login", goles: 2 },
      { name: "AAA", team: "Compas", goles: 6 },
      { name: "Caditos", team: "Compas", goles: 3 },
      { name: "Relleno 3", team: "DTD Mancos", goles: 1 }
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GoleadoresPage');
  }

}
