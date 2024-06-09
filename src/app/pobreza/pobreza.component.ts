import { Component } from '@angular/core';

@Component({
  selector: 'app-pobreza',
  templateUrl: './pobreza.component.html',
  styleUrls: ['./pobreza.component.css']
})
export class PobrezaComponent {

  titulo: string = "O que é Pobreza?"  
  paragrafo: string = "A pobreza é uma condição que vai além da falta de dinheiro. Ela envolve não ter acesso a necessidades básicas como comida, moradia, saúde e educação. As pessoas em situação de pobreza também enfrentam a falta de poder e oportunidades, são mais vulneráveis a doenças e exploração, e vivem sem infraestrutura adequada. Além disso, a pobreza inclui a falta de representação política e liberdade, deixando essas pessoas em uma posição ainda mais frágil diante de adversidades. Uma abordagem importante para entender a pobreza é considerar as capacidades das pessoas, ou seja, sua habilidade de realizar seu potencial e levar uma vida digna. Na pobreza, essas capacidades são severamente limitadas, impedindo que os indivíduos alcancem uma qualidade de vida satisfatória."
  ong: string = "Conheça Respeitadas ONG's"
}
