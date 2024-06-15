import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SobreComponent } from './sobre/sobre.component';
import { HomeComponent } from './home/home.component';
import { PobrezaComponent } from './pobreza/pobreza.component';
import { SustentabilidadeComponent } from './sustentabilidade/sustentabilidade.component';
import { GlobalizacaoComponent } from './globalizacao/globalizacao.component';
import { OrdemMundialComponent } from './ordem-mundial/ordem-mundial.component';
import { CorrupcaoComponent } from './corrupcao/corrupcao.component';
import { EstadoGovComponent } from './estado-gov/estado-gov.component';
import { PoliticasPublicasComponent } from './politicas-publicas/politicas-publicas.component';

const routes: Routes = [

  {path: '', component: HomeComponent, data: {animation: 'home'}},
  {path: 'corrupcao', component: CorrupcaoComponent, data: {animation: 'corrupcao'}},
  {path: 'estado-gov', component: EstadoGovComponent, data: {animation: 'estado-gov'}},
  {path: 'globalizacao', component: GlobalizacaoComponent, data: {animation: 'globalizacao'}},
  {path: 'ordem-mundial', component: OrdemMundialComponent, data: {animation: 'ordem-mundial'}},
  {path: 'pobreza', component: PobrezaComponent, data: {animation: 'pobreza'}},
  {path: 'politicas-publicas', component: PoliticasPublicasComponent, data: {animation: 'politicas-publicas'}},
  {path: 'sobre', component: SobreComponent, data: {animation: 'sobre'},},
  {path: 'sustentabilidade', component: SustentabilidadeComponent, data: {animation: 'sustentabilidade'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
