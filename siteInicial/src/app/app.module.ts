/* ARQUIVO PRINCIPAL dos Imports da App */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Novos imports a partir daqui
import { HomeComponent } from './components/views/pages/home/home.component';
import { HeaderComponent } from './components/views/template/header/header.component';
import { FooterComponent } from './components/views/template/footer/footer.component';
import { NavComponent } from './components/views/template/nav/nav.component';
import { SidebarComponent } from './components/views/template/sidebar/sidebarR.component';
import { Sidebar2Component } from './components/views/template/sidebar/sidebar2.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  // Os componentes são declarados aqui
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    SidebarComponent,
    Sidebar2Component,
  ],

  // Os módulos são importados aqui
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  
  // Aqui são os services etc
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
