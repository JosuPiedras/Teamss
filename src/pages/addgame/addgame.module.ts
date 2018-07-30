import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddgamePage } from './addgame';

@NgModule({
  declarations: [
    AddgamePage,
  ],
  imports: [
    IonicPageModule.forChild(AddgamePage),
  ],
})
export class AddgamePageModule {}
