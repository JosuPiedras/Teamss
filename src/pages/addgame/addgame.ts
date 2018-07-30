import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController, AlertController } from 'ionic-angular';

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
  public players1 = [];
  public players2 = [];

  public filter1 = [];
  public filter2 = [];

  public Goles1 = [];
  public Goles2 = [];

  public teams = [];

  constructor(public alertCtrl: AlertController, public toastCtrl: ToastController, public navCtrl: NavController, public navParams: NavParams) {
    this.teams = [
      {name:"DTD"},
      {name:"Compas"},
      {name:"Login"}
    ];
    this.players1 = [
      {name:"Josu"},
      {name: "Pedro"},
      {name: "Jose"},
      { name: "jerald" },
    ];
    this.players2 = [
      { name: "luis" },
      { name: "Pelos" },
      { name: "Coos" },
      { name: "Pul" },
    ];
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
            const toast = this.toastCtrl.create({
              message: 'Juego guardado!',
              duration: 3000
            });
            toast.present();
          }
        }
      ]
    });
    prompt.present();
  }

}
