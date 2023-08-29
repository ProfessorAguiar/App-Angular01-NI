import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TituloComponent } from './components/titulo/titulo.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BotaoComponent } from './components/botao/botao.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NgbnavbarComponent } from './components/ngbnavbar/ngbnavbar.component';
@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    NavBarComponent,
    BotaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    CarouselComponent,
    NgbnavbarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
