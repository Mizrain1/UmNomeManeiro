/* ARQUIVO PRINCIPAL dos Imports da App */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Novos imports a partir daqui

@NgModule({
  // Os componentes são declarados aqui
  declarations: [
    AppComponent
  ],

  // Os módulos são importados aqui
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  
  // Aqui são os services etc
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
