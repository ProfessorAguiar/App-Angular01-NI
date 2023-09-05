import { Component } from '@angular/core';
import { PokeService } from './poke.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public poke:any = [];
  constructor(private PokeServ: PokeService) { }
  ngOnInit(): void {
    this.PokeServ.getPoke().subscribe(
      data => {
        this.poke = data;
      }
    );
  }
}
