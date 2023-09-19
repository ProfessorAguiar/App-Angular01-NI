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
  public mensagem: string = '';
  public m: boolean = false;
  public err: boolean = false;
  public formulario: boolean = false;
  public login: boolean = false;
  constructor(private SobreServ: SobreService, private http: HttpClient) { }
  ngOnInit(): void {
    this.SobreServ.getSobre().subscribe(
      data => {
        this.Sobre = data;
        console.log(data)
      }
    );
  }
  postId = '';
  AlteraSobre(t: string, c: string, e: Event) {
    if (t != '' || c != '') {
      this.m = false;
      this.http.put<any>(`http://localhost:5500/sobre/${this.Sobre[0].id}`, { titulo: t, conteudo: c }, { responseType: 'json' }).subscribe(data => {
        this.postId = data.id;
        console.log(data.resp)
        this.err = true
        this.mensagem = data.resp
      })
    } else {
      e.preventDefault()
      this.m = true;
      this.mensagem = 'Preencha ao menos um dos campos que serão alterados!';
    }
  }
  public fAltera() {
    this.login = !(this.login);
    if (this.login) {
      this.formulario = false
    }
  }

  functionLogin(u: string, p: string, e: Event) {
    e.preventDefault();
    this.http.post<any>(`http://localhost:5500/usuario`, { username: u, password: p }, { responseType: 'json' }).subscribe(data => {
      console.log(data.mensagem)
      if (data.valid === true) {
        this.login = false;
        this.formulario = true;
      }else{
        console.log(`Usuário ${u} não encontrado!`)
      }
    })

  }
}



