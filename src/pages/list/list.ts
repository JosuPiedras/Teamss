import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { FirebaseproviderProvider } from '../../providers/firebaseprovider/firebaseprovider'
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  public team = null;
  public players: Observable<any[]>;
  constructor(public fbp: FirebaseproviderProvider, public toastCtrl: ToastController, public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.team = {
      name:fbp.team,
      partidos: 0,
      ganados: 0,
      empatados: 0,
      perdidos: 0,
      favor: 0,
      contra: 0,
      points: 0
    };
    this.players = this.fbp.obtener_jugadores().valueChanges();
  }

  showPrompt() {
    const prompt = this.alertCtrl.create({
      title: 'Nuevo jugador',
      message: "Ingrese el nombre del jugador:",
      inputs: [
        {
          name: 'Nombre',
          placeholder: 'ej. Juan Camaney'
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
            const data2 = {
              name: data.Nombre,
              Goles: 0,
              team: this.fbp.team,
              status: 1
            };
            this.fbp.crear_jugador(data2);
            console.log(JSON.stringify(data)); //to see the object
            console.log(data.Nombre);
            const toast = this.toastCtrl.create({
              message: 'Jugador guardado!',
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
