import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './Pages/contato/contato.component';
import { HomepageComponent } from './Pages/homepage/homepage.component';
import { SobreComponent } from './Pages/sobre/sobre.component';
import { ArtigosComponent } from './Pages/artigos/artigos.component';
const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'artigos', component:ArtigosComponent},
  { path: 'contato', component: ContatoComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
