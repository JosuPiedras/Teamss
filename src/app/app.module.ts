import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { EquiposComponent } from '../pages/equipos/equipos';
import { MiembrosEquiposComponent } from '../pages/miembros-equipos/miembros-equipos';
import { PuntuacionesComponent } from '../pages/puntuaciones/puntuaciones';
import { VerpuntuacionesComponent } from '../pages/verpuntuaciones/verpuntuaciones';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EquiposComponent,
    MiembrosEquiposComponent,
    PuntuacionesComponent,
    VerpuntuacionesComponent,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EquiposComponent,
    MiembrosEquiposComponent,
    PuntuacionesComponent,
    VerpuntuacionesComponent,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
