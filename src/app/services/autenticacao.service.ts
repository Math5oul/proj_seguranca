import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario.interface';


@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  private readonly API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  login(email: string, senha: string, cpf: string): Observable<any> {
    const url = 'http://localhost:3000/login';
    const body = { email, senha, cpf };
    return this.http.post(url, body);
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  criarConta(usuario: any): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/usuarios`, usuario);
  }

  getUsuarioLogado(): Usuario | null {
    const usuarioJSON = localStorage.getItem('usuario');
    if (!usuarioJSON) {
      return null;
    }
    try {
      const usuario = JSON.parse(usuarioJSON);
      return usuario as Usuario;
    } catch (error) {
      console.error('Erro ao fazer parsing de JSON do usuário', error);
      return null;
    }
  }

  setUsuarioLogado(usuario: Usuario): void {
    localStorage.setItem('usuario', JSON.stringify(usuario));
  }

  removerUsuarioLogado(): void {
    localStorage.removeItem('usuario');
  }

  getToken(): string {
    const token = localStorage.getItem('token');
    if (token) {
      return token;
    }
    return '';
  }

  estaLogado(): boolean {
    return !!this.getToken();
  }

}
