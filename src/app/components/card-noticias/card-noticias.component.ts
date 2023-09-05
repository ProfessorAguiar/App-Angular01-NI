import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-card-noticias',
  templateUrl: './card-noticias.component.html',
  styleUrls: ['./card-noticias.component.css']
})
export class CardNoticiasComponent {
  @Input() titulo:string='';
  @Input() image:string='';
  @Input() conteudo:string='';
}
