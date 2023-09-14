import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blocos',
  templateUrl: './blocos.component.html',
  styleUrls: ['./blocos.component.css']
})
export class BlocosComponent {
  @Input() tipo=''
}
