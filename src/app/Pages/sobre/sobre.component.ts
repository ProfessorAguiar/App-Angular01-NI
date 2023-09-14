import { Component, Input } from '@angular/core';
import { SobreService } from './sobre.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent {
  public Sobre: any = [];
  constructor(private SobreServ: SobreService, private http:HttpClient) { }
  ngOnInit(): void {
    this.SobreServ.getSobre().subscribe(
      data => {
        this.Sobre = data;
        console.log(data)
      }
    );
  }
  postId='';
  AlteraSobre(t:string, c:string) {
    this.http.put<any>(`http://localhost:5500/sobre/${this.Sobre[0].id}`, {titulo: t,conteudo:c }).subscribe(data => {
      this.postId = data.id;
    })
  }
}
