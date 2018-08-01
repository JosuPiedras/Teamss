import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController, AlertController } from 'ionic-angular';

import { FirebaseproviderProvider } from '../../providers/firebaseprovider/firebaseprovider'
import { Observable } from 'rxjs/Observable';
/**
 * Generated class for the AddgamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addgame',
  templateUrl: 'addgame.html',
})
export class AddgamePage {
  public team1 = null;
  public team2 = null;
  public Goles = [];
  public players1: Observable<any[]>;
  public players2: Observable<any[]>;

  public filter1 = [];
  public filter2 = [];

  public Goles1 = [];
  public Goles2 = [];

  public teams:Observable<any[]>;

  constructor(public fbp: FirebaseproviderProvider, public alertCtrl: AlertController, public toastCtrl: ToastController, public navCtrl: NavController, public navParams: NavParams) {
    this.teams = this.fbp.obtener_equipos().valueChanges();
  }

  t1select(){
    this.players1 = this.fbp.obtener_jugadores(this.team1).valueChanges();
  }

  t2select(){
    this.players2 = this.fbp.obtener_jugadores(this.team2).valueChanges();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddgamePage');
  }

  showPrompt() {
    const prompt = this.alertCtrl.create({
      title: 'Desea guardar el juego?',
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Guardar',
          handler: data => {
            let g1 = 0;
            let g2 = 0;
            this.Goles1.forEach(value => {
              g1 = g1 + Number(value);
            });
            this.Goles2.forEach(value => {
              g2 = g2 + Number(value);
            });
            let p1 = [];
            let p2 = [];
            for (let i = 0; i < this.filter1.length; i++) {
              p1.push({ name: this.filter1[i], Goles: this.Goles1[i] })
            }
            for (let i = 0; i < this.filter2.length; i++) {
              p2.push({ name: this.filter2[i], Goles: this.Goles2[i] })
            }
            const data2 = {
              game: [
                { name: this.team1, Goles: g1, jugadores: p1 },
                { name: this.team2, Goles: g2, jugadores: p2 }
              ],
              torneo: this.fbp.torneo,
              status: 1
            }

            this.fbp.crear_juego(data2);
            const toast = this.toastCtrl.create({
              message: 'Juego guardado!',
              duration: 3000
            });
            toast.present();
            this.navCtrl.pop();
          }
        }
      ]
    });
    prompt.present();
  }

}
