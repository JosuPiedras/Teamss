import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListPage } from '../list/list'
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { FirebaseproviderProvider } from '../../providers/firebaseprovider/firebaseprovider'
import { Observable } from 'rxjs/Observable';

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
  public teams: Observable<any[]>;
  constructor(public fbp:FirebaseproviderProvider, public toastCtrl: ToastController, public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
    this.teams = fbp.obtener_equipos().valueChanges();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamsPage');
  }

  goToOtherPage(data) {
    this.fbp.seleccionar_equipo(data);
    
    this.navCtrl.push(ListPage, { team: data});
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
            const data2 = {
              Name: data.Nombre,
              torneo: this.fbp.torneo,
              points: 0,
              status: 1
            };
            this.fbp.crear_equipo(data2);
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
