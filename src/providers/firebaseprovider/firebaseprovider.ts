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
    items.push(data);
  }

  obtener_juegos(){
    const items = this.afDB.list('juegos', ref => ref.orderByChild('torneo').equalTo(this.torneo));
    return items;
  }

  crear_juego(data){
    const items = this.afDB.list('juegos');
    items.push(data);
  }

}
