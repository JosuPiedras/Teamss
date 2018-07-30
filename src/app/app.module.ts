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
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
