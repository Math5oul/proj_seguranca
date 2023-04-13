import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from '../services/autenticacao.service';
import { UsuarioImpl } from '../interfaces/usuario.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private autenticacaoService: AutenticacaoService) { }

  ngOnInit(): void {
  }

  usuario: UsuarioImpl = {
    email: '',
    senha: '',
    nome: ''
  };

  fazerLogin(usuario: string, senha: string) {
    this.autenticacaoService.login(usuario, senha).subscribe(
      resposta => {
        // armazenar token e usuário no localStorage
        localStorage.setItem('token', resposta.token);
        localStorage.setItem('usuario', JSON.stringify(resposta.usuario));
        // redirecionar para tela de perfil
        location.href = '/perfil';
      },
      erro => {
        console.log('Erro ao fazer login: ', erro);
      }
    );
  }

  get estaLogado() {
    return this.autenticacaoService.estaLogado();
  }

}
