import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { FirebaseproviderProvider } from '../../providers/firebaseprovider/firebaseprovider';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public torneos:Observable<any[]>;

  constructor(public fbp :FirebaseproviderProvider, public toastCtrl: ToastController, public alertCtrl: AlertController, public navCtrl: NavController) {
    this.torneos = this.fbp.obtener_torneos().valueChanges();
    
  }

  showPrompt() {
    const prompt = this.alertCtrl.create({
      title: 'Nuevo torneo',
      message: "Ingrese el nombre y organizador del torneo:",
      inputs: [
        {
          name: 'Nombre',
          placeholder: 'Nombre del torneo'
        },
        {
          name: 'Organizador',
          placeholder: 'Organizador'
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
            this.fbp.crear_torneo(data);
            console.log('Saved clicked');
            console.log(JSON.stringify(data)); //to see the object
            console.log(data.Nombre);
            const toast = this.toastCtrl.create({
              message: 'Torneo guardado!',
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
