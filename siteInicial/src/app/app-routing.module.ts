import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Imports nossos
import { HomeComponent } from './components/views/pages/home/home.component';
import { Aba1Component } from './components/views/pages/aba1/aba1.component';
import { Aba2Component } from './components/views/pages/aba2/aba2.component';
import { Aba3Component } from './components/views/pages/aba3/aba3.component';

const routes: Routes = [
   { path: 'home', component: HomeComponent},
   { path: 'aba1', component: Aba1Component},
   { path: 'aba2', component: Aba2Component},
   { path: 'aba3', component: Aba3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
