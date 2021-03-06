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
      name: this.navParams.get('team'),
      partidos: 0,
      ganados: 0,
      empatados: 0,
      perdidos: 0,
      favor: 0,
      contra: 0,
      points: 0
    };
    this.fbp.detalle_team().valueChanges().subscribe(todos => {
      const all = todos;
      let tm = this.navParams.get('team');
      this.team.partidos = all.filter(function (a) { return a['game'][0].name == tm || a['game'][1].name == tm; });
      let fv = 0;
      let ct = 0;
      this.team.partidos.forEach(element => {
        if (element['game'][0].name == tm) {
          element['game'][0].jugadores.forEach(e => {
            fv = fv + Number(e.Goles);
          });
          element['game'][1].jugadores.forEach(e => {
            ct = ct + Number(e.Goles);
          });
        } else {
          element['game'][1].jugadores.forEach(e => {
            fv = fv + Number(e.Goles);
          });
          element['game'][0].jugadores.forEach(e => {
            ct = ct + Number(e.Goles);
          });
        }
      });
      this.team.favor = fv;
      this.team.contra = ct;
      this.team.ganados = this.team.partidos.filter(function (a) { return (a['game'][0].Goles < a['game'][1].Goles && a['game'][1].name == tm) || (a['game'][0].Goles > a['game'][1].Goles && a['game'][0].name == tm); }).length;
      this.team.perdidos = this.team.partidos.filter(function (a) { return (a['game'][0].Goles > a['game'][1].Goles && a['game'][1].name == tm) || (a['game'][0].Goles < a['game'][1].Goles && a['game'][0].name == tm); }).length;
      this.team.empatados = this.team.partidos.filter(function (a) { return a['game'][0].Goles == a['game'][1].Goles; }).length;
      this.team.points = this.team.ganados * 3 + this.team.empatados;
    });
    this.players = this.fbp.obtener_jugadores().valueChanges();
  }
  ionViewWillEnter() {
    
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
              team: this.navParams.get('team'),
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
