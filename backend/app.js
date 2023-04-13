const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const usuarios = [
  { id: 1, nome: 'João', email: 'joao@mail.com', senha: '123456', cpf: '11111111111' },
  { id: 2, nome: 'Maria', email: 'maria@mail.com', senha: '123456', cpf: '11111111112' }
];

let proximoId = 4;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Bem-vindo(a) à API de usuários!');
});

app.post('/usuarios', (req, res) => {
  const novoUsuario = {
    id: proximoId++,
    nome: req.body.nome,
    email: req.body.email,
    senha: req.body.senha,
    cpf: req.body.cpf
  };
  usuarios.push(novoUsuario);
  res.status(201).json(novoUsuario);
});

app.post('/login', (req, res) => {
  const email = req.body.email;
  const senha = req.body.senha;
  const cpf = req.body.cpf;

  const usuario = usuarios.find(u => u.email === email && u.senha === senha && u.cpf === cpf);

  if (usuario) {
    res.status(200).json(usuario);
  } else {
    res.status(401).json({ mensagem: 'E-mail ou senha inválidos' });
  }
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
