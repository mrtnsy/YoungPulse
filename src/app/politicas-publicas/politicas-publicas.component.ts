import { Component } from '@angular/core';

@Component({
  selector: 'app-politicas-publicas',
  templateUrl: './politicas-publicas.component.html',
  styleUrls: ['./politicas-publicas.component.css']
})
export class PoliticasPublicasComponent {

  titulo: string = "Políticas Públicas"
  paragrafo: string = "Políticas Públicas são estratégias e ações adotadas por governos para solucionar problemas públicos e promover o bem-estar da sociedade. Essas políticas podem abranger uma vasta gama de áreas, incluindo saúde, educação, segurança, meio ambiente, transporte, e desenvolvimento econômico. Elas envolvem a formulação, implementação e avaliação de planos e programas que visam atender às necessidades e demandas da população."
}
