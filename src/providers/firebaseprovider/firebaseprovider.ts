import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class FirebaseproviderProvider {
  public torneo:any;
  public team:any;

  constructor(private afDB: AngularFireDatabase) {
    this.torneo = null;
  }
  seleccionar_torneo(data){
    this.torneo = data;
  }

  crear_torneo(data){
    const items = this.afDB.list('torneos');
    items.push(data);
  }

  obtener_torneos(){
    const items = this.afDB.list('torneos');
    return items;
  }

  obtener_equipos(){
    console.log(this.torneo)
    const items = this.afDB.list('equipos', ref => ref.orderByChild('torneo').equalTo(this.torneo));
    return items;
  }

  crear_equipo(data){
    const items = this.afDB.list('equipos');
    items.push(data);
  }

  seleccionar_equipo(data){
    this.team = data;
  }

  detalle_team(){
    const items = this.afDB.list('juegos', ref => ref.orderByChild('torneo').equalTo(this.torneo));
    return items;
  }

  obtener_jugadores(data=false) {
    if (data){
      return this.afDB.list('jugadores', ref => ref.orderByChild('team').equalTo(data));
    }else{
      return this.afDB.list('jugadores', ref => ref.orderByChild('team').equalTo(this.team));
    }
  }

  crear_jugador(data){
    const items = this.afDB.list('jugadores');
    data.torneo = this.torneo;
    items.push(data);
  }

  obtener_juegos(){
    const items = this.afDB.list('juegos', ref => ref.orderByChild('torneo').equalTo(this.torneo));
    return items;
  }

  crear_juego(data){
    const items = this.afDB.list('juegos');
    for (let j = 0; j < 2; j++) {
      for (let i = 0; i < data.game[j].jugadores.length; i++) {
        let named = [];
        this.afDB.list('jugadores', ref => ref.orderByChild('name').equalTo(data.game[j].jugadores[i].name)).snapshotChanges().subscribe(snap => {
          named = snap;
          named.forEach(value => {
            if (value.payload.val().torneo == this.torneo) {
              const b = this.afDB.list('jugadores');
              const c = value.payload.val();
              c.Goles = Number(c.Goles) + Number(data.game[j].jugadores[i].Goles);
              b.update(value.payload.key, c);
            }
          });
        });
      }
    }
    items.push(data);
  }

  obtener_goleadores(){
    const items = this.afDB.list('jugadores', ref => ref.orderByChild('torneo').equalTo(this.torneo));
    return items;
  }

}
