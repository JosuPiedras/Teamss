import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class FirebaseproviderProvider {

  constructor(private afDB: AngularFireDatabase) {
    // this.items = afDB.list('asistencia');
    // // this.items.subscribe(z => {
    //   this.gaming = z[z.length - 1].fecha;
    //   this.change_list(this.gaming);
    // })
    //const items = af.database.list('items');
    //items.push('new item');
  }

  crear_torneo(data){
    const items = this.afDB.list('torneos');
    items.push(data);
  }

  obtener_torneos(){
    const items = this.afDB.list('torneos');
    console.log('fork')
    return items;
  }

}
