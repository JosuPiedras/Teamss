import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FirebaseproviderProvider } from '../../providers/firebaseprovider/firebaseprovider'
import { Observable } from 'rxjs/Observable';
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
  public best = 0;
  public players = [];
  constructor(public fbp: FirebaseproviderProvider, public navCtrl: NavController, public navParams: NavParams) {
    
  }
  ionViewWillEnter() {
    this.fbp.obtener_goleadores().valueChanges().subscribe(
      valu => {
        this.players = valu;
        this.players.sort(function (a, b) { return (a.Goles < b.Goles) ? 1 : ((b.Goles < a.Goles) ? -1 : 0); });
      }
    );
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad GoleadoresPage');
  }

}
