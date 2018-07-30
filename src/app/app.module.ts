import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { MiembrosEquiposComponent } from '../pages/miembros-equipos/miembros-equipos';
import { PuntuacionesComponent } from '../pages/puntuaciones/puntuaciones';
import { VerpuntuacionesComponent } from '../pages/verpuntuaciones/verpuntuaciones';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { JuegosPage } from '../pages/juegos/juegos';
import { TeamsPage } from '../pages/teams/teams';
import { GoleadoresPage } from '../pages/goleadores/goleadores';
import { AddgamePage } from '../pages/addgame/addgame';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FirebaseproviderProvider } from '../providers/firebaseprovider/firebaseprovider';

export const firebaseConfig = {
  apiKey: "AIzaSyAQPGUAYsGk3SdTkE3IkRiheOVmWckoQVw",
  authDomain: "sportregister-2d7d7.firebaseapp.com",
  databaseURL: "https://sportregister-2d7d7.firebaseio.com",
  projectId: "sportregister-2d7d7",
  storageBucket: "sportregister-2d7d7.appspot.com",
  messagingSenderId: "1026356509067"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MiembrosEquiposComponent,
    PuntuacionesComponent,
    VerpuntuacionesComponent,
    ListPage,
    JuegosPage,
    TeamsPage,
    GoleadoresPage,
    AddgamePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MiembrosEquiposComponent,
    PuntuacionesComponent,
    VerpuntuacionesComponent,
    ListPage,
    JuegosPage,
    TeamsPage,
    GoleadoresPage,
    AddgamePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseproviderProvider
  ]
})
export class AppModule {}
