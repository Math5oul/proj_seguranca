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
    nome: '',
    cpf: ''
  };

  fazerLogin(usuario: string, senha: string,  cpf: string) {
    this.autenticacaoService.login(usuario, senha, cpf).subscribe(
      resposta => {
        // armazenar token e usuário no localStorage
        localStorage.setItem('token', resposta.token);
        localStorage.setItem('usuario', JSON.stringify(resposta.usuario));
        // redirecionar para tela de perfil
        location.href = '/perfil';
      },
      erro => {
        console.log('Erro ao fazer login: ', erro);
        alert('Login inválido')
      }
    );
  }

  get estaLogado() {
    return this.autenticacaoService.estaLogado();
  }

}
