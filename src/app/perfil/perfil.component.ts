import { Component, OnInit } from '@angular/core';
import { UsuarioImpl } from '../interfaces/usuario.interface';
import { AutenticacaoService } from '../services/autenticacao.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent implements OnInit {
  usuarioLogado: UsuarioImpl = new UsuarioImpl();

  constructor(private autenticacaoService: AutenticacaoService) {}

  ngOnInit(): void {
    // const usuarioLogado = this.autenticacaoService.getUsuarioLogado();
    // if (usuarioLogado) {
    //   this.usuarioLogado = usuarioLogado as UsuarioImpl;
    // }
  }
}
