import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SobreComponent } from './sobre/sobre.component';
import { HomeComponent } from './home/home.component';
import { PobrezaComponent } from './pobreza/pobreza.component';

const routes: Routes = [

  {path: '', component: HomeComponent, data: {animation: 'home'}, },
  {path: 'sobre', component: SobreComponent, data: {animation: 'sobre'},},
  {path: 'pobreza', component: PobrezaComponent, data: {animation: 'pobreza'}}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
