import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioImpl } from '../interfaces/usuario.interface';
import { UsuarioService } from '../services/usuario.service.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  usuario: UsuarioImpl = new UsuarioImpl();

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit() {
  }

  createUsuario(): void {
    this.usuarioService.cadastrar(this.usuario)
      .subscribe(() => {
        this.router.navigate(['/login']);
      });
  }

}
