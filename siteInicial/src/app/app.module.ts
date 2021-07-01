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
import { SidebarTopComponent } from './components/views/template/sidebar/sidebarTop.component';
import { SidebarLateralComponent } from './components/views/template/sidebar/sidebarLateral.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ConteudoComponent } from './components/views/template/conteudo/conteudo.component';
import { Aba1Component } from './components/views/pages/aba1/aba1.component';
import { Aba2Component } from './components/views/pages/aba2/aba2.component';
import { Aba3Component } from './components/views/pages/aba3/aba3.component';
import { AbaContatoComponent } from './components/views/pages/aba-contato/aba-contato.component';
import { AbaSobreComponent } from './components/views/pages/aba-sobre/aba-sobre.component';
import { AbaRegrasComponent } from './components/views/pages/aba-regras/aba-regras.component';

@NgModule({
  // Os componentes são declarados aqui
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SidebarTopComponent,
    SidebarLateralComponent,
    ConteudoComponent,
    Aba1Component,
    Aba2Component,
    Aba3Component,
    AbaContatoComponent,
    AbaSobreComponent,
    AbaRegrasComponent
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
