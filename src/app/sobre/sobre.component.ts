
import { Component, HostBinding } from '@angular/core';
import { slideInAnimation } from '../shared/route-animations';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css'],
  animations: [slideInAnimation]
})
export class SobreComponent {

  titulo: string = "Conheça a Young Pulse!"
  paragrafo: string = "No Young Pulse, buscamos não apenas informar, mas também inspirar. Somos uma plataforma dedicada a explorar e entender os conceitos que moldam o mundo ao nosso redor. Acreditamos no poder da informação para catalisar a mudança e capacitar a próxima geração de pensadores e líderes. Nosso objetivo é oferecer uma visão abrangente e acessível de temas que abrangem desde questões sociais como racismo e pobreza até questões globais como globalização e proteção ambiental. Queremos fornecer recursos educacionais que capacitem nossos usuários a compreender e discutir esses temas de maneira significativa. No Young Pulse, acreditamos na diversidade de perspectivas e no diálogo construtivo. Valorizamos a curiosidade, a empatia e a vontade de aprender. Nosso compromisso é criar um espaço inclusivo onde todos se sintam bem-vindos para explorar, questionar e crescer juntos. Junte-se a nós enquanto navegamos pelo complexo tecido de ideias que moldam o nosso mundo. Juntos, podemos criar um futuro mais informado, justo e sustentável para todos."
  frase: string ="\" Só tem direito de criticar aquele que tem coração para ajudar. \" (Abraham Lincoln)"
}
