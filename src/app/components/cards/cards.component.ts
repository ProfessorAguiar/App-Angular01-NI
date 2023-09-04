import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  @Input() img='';
  @Input() nome='';
  @Input() id='';
  @Input() peso='';
  @Input() altura='';
}
