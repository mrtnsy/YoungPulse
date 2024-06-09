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

@NgModule({
  declarations: [
    AppComponent,
    SobreComponent,
    HomeComponent,
    PobrezaComponent,
    SustentabilidadeComponent
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
