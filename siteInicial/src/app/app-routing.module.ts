import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Imports nossos
import { HomeComponent } from './components/views/pages/home/home.component';

const routes: Routes = [
   { path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
