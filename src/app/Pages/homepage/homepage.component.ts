import { Component, Input } from '@angular/core';
import { NoticiasService } from './noticias.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent {
  // cards=[
  //   {
  //     t:'Testando Entrada de informação no Angular',
  //     i:'https://icons.getbootstrap.com/assets/img/icons-hero.png',
  //     c:'Free, high quality, open source icon library with over 1,800 icons. Include them anyway you like—SVGs, SVG sprite, or web fonts. Use them with or without Bootstrap in any project.'
  //   },
  //   {
  //     t:'Segundo Card',
  //     i:'https://icons.getbootstrap.com/assets/img/icons-hero.png',
  //     c:'Free, high quality, open source icon library with over 1,800 icons. Include them anyway you like—SVGs, SVG sprite, or web fonts. Use them with or without Bootstrap in any project.'
  //   },
  //   {
  //     t:'Terceiro Card',
  //     i:'https://icons.getbootstrap.com/assets/img/icons-hero.png',
  //     c:'Free, high quality, open source icon library with over 1,800 icons. Include them anyway you like—SVGs, SVG sprite, or web fonts. Use them with or without Bootstrap in any project.'
  //   },
  // ]

  // titulos: string[] = [
  //   'Teste1',
  //   'Teste2',
  //   'Teste3',
  //   'Teste4',
  //   'Teste5'
  // ]
  // cards = [
  //   {
  //     url: 'http://www.andrefelizardo.com.br/blog/wp-content/uploads/2015/12/angularjs-helloworld-03.png',
  //     texto: 'Teste de texto transferido entre componentes.'
  //   },
  //   {
  //     url: 'https://timmousk.com/wp-content/uploads/2022/12/72yayz.webp',
  //     texto: 'Final thoughts As you can see, it is easy to create an array of objects in TypeScript. We have four different ways of achieving it. Which one you choose is a question of preference.'
  //   },
  //   {
  //     url: 'https://www.uplers.com/wp-content/uploads/2022/05/AngularJs-Frameworks-891x505.jpg',
  //     texto: 'With nearly 4.2 million users across the globe, AngularJS frameworks are highly in demand for web development. Many Angular development companies carefully hire developers based on their framework knowledge.'
  //   },
  //   {
  //     url: 'https://blog.zenika.com/wp-content/uploads/2015/01/vignette-angularjs-1.jpg',
  //     texto: 'At the last big Angular conference (ng-europe) I attended, the Angular developer team announced the design of the next major release of the framework. For those who follow closely the news, it was not so much of a breakthrough. But for the whole community it was quite huge.'
  //   },
  // ]


  public Noticia: any = [];
  constructor(private NotServ: NoticiasService) { }
  ngOnInit(): void {
    this.NotServ.getNoticia().subscribe(
      data => {
        this.Noticia = data.articles;
        console.log(data.articles)
      }
    );
  }
}