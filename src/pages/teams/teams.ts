import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListPage } from '../list/list'
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the TeamsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html',
})
export class TeamsPage {
  public teams = [];
  constructor(public toastCtrl: ToastController, public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
    this.teams = [
      { name: "DTD", points: 5 },
      { name: "Compas", points: 6 },
      { name: "XD", points: 4 }
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamsPage');
  }

  goToOtherPage() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(ListPage);
  }

  showPrompt() {
    const prompt = this.alertCtrl.create({
      title: 'Nuevo equipo',
      message: "Ingrese el nombre del equipo:",
      inputs: [
        {
          name: 'Nombre',
          placeholder: 'ej. Los Chidoris'
        },
      ],
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
            console.log('Saved clicked');
            console.log(JSON.stringify(data)); //to see the object
            console.log(data.Nombre);
            const toast = this.toastCtrl.create({
              message: 'Equipo guardado!',
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
