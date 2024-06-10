import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SobreComponent } from './sobre/sobre.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { PobrezaComponent } from './pobreza/pobreza.component';
import { SustentabilidadeComponent } from './sustentabilidade/sustentabilidade.component';
import { GlobalizacaoComponent } from './globalizacao/globalizacao.component';
import { OrdemMundialComponent } from './ordem-mundial/ordem-mundial.component';
import { CorrupcaoComponent } from './corrupcao/corrupcao.component';
import { EstadoGovComponent } from './estado-gov/estado-gov.component';

@NgModule({
  declarations: [
    AppComponent,
    SobreComponent,
    HomeComponent,
    PobrezaComponent,
    SustentabilidadeComponent,
    GlobalizacaoComponent,
    OrdemMundialComponent,
    CorrupcaoComponent,
    EstadoGovComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [provideAnimations()],
  bootstrap: [AppComponent]
})
export class AppModule { }
