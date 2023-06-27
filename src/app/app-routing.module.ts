import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VoleyComponent } from './Deportes/voley/voley.component';
import { FutbolComponent } from './Deportes/futbol/futbol.component';
import { BasquetComponent } from './Deportes/basquet/basquet.component';
import { DeportesComponent } from './Deportes/deportes.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'Voley', component:VoleyComponent},
  {path:'Futbol', component: FutbolComponent},
  {path:'Basquet', component: BasquetComponent},
  {path:'Deportes', component: DeportesComponent},
  {path: '**', component:HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
