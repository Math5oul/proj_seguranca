export interface Usuario {
  nome: string;
  email: string;
  senha: string;
}

export class UsuarioImpl implements Usuario {
  nome: string = '';
  email: string = '';
  senha: string = '';
}
