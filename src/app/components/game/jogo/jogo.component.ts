import { Component } from '@angular/core';

@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.component.html',
  styleUrls: ['./jogo.component.css']
})
export class JogoComponent {
  varClick:string='';
  clk=false
  m1=[
    ['X','X','X'],
    ['O','X','O'],
    ['X','O','X']
  ];
  public fncClick(){
    if(this.clk===false){
      this.varClick='O';
    }else{
      this.varClick='X';
    }
  }
}
