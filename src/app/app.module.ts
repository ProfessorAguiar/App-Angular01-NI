import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TituloComponent } from './components/titulo/titulo.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BotaoComponent } from './components/botao/botao.component';
import { FormsModule } from '@angular/forms';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './Components/footer/footer.component';
import { CardComponent } from './Components/card/card.component';
import { HomepageComponent } from './Pages/homepage/homepage.component';
import { Card2Component } from './Components/card2/card2.component';
import { SobreComponent } from './Pages/sobre/sobre.component';
import { ContatoComponent } from './Pages/contato/contato.component';
import { HttpClientModule } from '@angular/common/http';
import { ArtigosComponent } from './Pages/artigos/artigos.component';
import { CardNoticiasComponent } from './components/card-noticias/card-noticias.component';
import { BlocosComponent } from './components/game/blocos/blocos.component';
import { JogoComponent } from './components/game/jogo/jogo.component';
@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    BotaoComponent,
    FooterComponent,
    CardComponent,
    HomepageComponent,
    Card2Component,
    SobreComponent,
    ContatoComponent,
    ArtigosComponent,
    CardNoticiasComponent,
    BlocosComponent,
    JogoComponent,
  ],
  imports: [
    NavBarComponent,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    CarouselComponent,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
