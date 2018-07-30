import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  public team = null;
  public players = [];
  constructor(public toastCtrl: ToastController, public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.team = {
      name:'DTD',
      partidos: 4,
      ganados: 2,
      empatados: 1,
      perdidos: 1,
      favor: 7,
      contra: 4,
      points: 9
    };
    this.players = [
      {name:"Josu", Goles:3},
      { name: "MegaBlaziken", Goles: 2 },
      { name: "Perrengiel", Goles: 2 },
    ];
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
