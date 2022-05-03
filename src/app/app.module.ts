import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { FormPlayerComponent } from './form-player/form-player.component';
import { GameStartComponent } from './game-start/game-start.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { DuoComponent } from './duo/duo.component';
import { SoloComponent } from './solo/solo.component';
import { routing } from './app.rooting';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    FormPlayerComponent,
    GameStartComponent,
    DuoComponent,
    SoloComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    MatGridListModule,
    routing
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
