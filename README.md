
API de Cadastro de Usuários
Bem-vindo ao projeto de Cadastro de Usuários! Esta é uma API simples, desenvolvida em Node.js com o Express, que permite registrar novos usuários e validar suas informações. Além disso, usamos a biblioteca Joi para garantir que os dados enviados estejam no formato correto, tornando o processo seguro e eficiente.

O que essa API faz?
Cadastro de Usuários: Você pode cadastrar um novo usuário fornecendo nome, e-mail, CPF e senha.
Validações:
O CPF deve ter exatamente 11 números e ser único.
O e-mail também precisa ser único.
A senha deve ser forte o suficiente para garantir a segurança do usuário.
Por que usamos Joi?
A biblioteca Joi é usada para garantir que os dados fornecidos pelo usuário sejam válidos antes de serem processados. Assim, garantimos que o CPF, e-mail, nome e senha estejam nos formatos esperados, ajudando a evitar erros e a manter a segurança dos dados.

Tecnologias Utilizadas
Node.js: Plataforma que permite rodar JavaScript no servidor.
Express: Framework que facilita a criação de APIs.
Joi: Biblioteca de validação para garantir que os dados estão corretos.
Como rodar o projeto
Clone o repositório:

bash
Copiar código
git clone https://github.com/seu-usuario/nome-do-repositorio.git
Entre no diretório do projeto:

bash
Copiar código
cd nome-do-repositorio
Instale as dependências:

bash
Copiar código
npm install
Inicie o servidor:

bash
Copiar código
npm start
Agora a API estará rodando em http://localhost:3000 e pronta para ser usada!

Endpoints disponíveis
POST /usuarios
Endpoint para cadastrar um novo usuário.

Exemplo de requisição:

json
Copiar código
{
  "nome": "João Silva",
  "email": "joao@example.com",
  "cpf": "12345678901",
  "senha": "minhaSenhaSegura"
}
Respostas possíveis:

201 Created: Usuário cadastrado com sucesso.
400 Bad Request: Algum dado está incorreto (como CPF inválido ou e-mail já cadastrado).
Validação dos Dados
Usamos o Joi para validar os dados dos usuários antes de cadastrá-los. Veja como funciona a validação:

Nome: Precisa ser uma string e é obrigatório.
E-mail: Deve ser um e-mail válido e também é obrigatório.
CPF: Precisa conter exatamente 11 dígitos numéricos.
Senha: Necessita de no mínimo 6 caracteres para garantir a segurança.
Aqui está um exemplo de como isso é implementado no código:

javascript
Copiar código
const Joi = require('joi');

const schema = Joi.object({
    nome: Joi.string().required(),
    email: Joi.string().email().required(),
    cpf: Joi.string().pattern(/^\d{11}$/).required(),
    senha: Joi.string().min(6).required()
});

const { error } = schema.validate(req.body);
if (error) {
    return res.status(400).json({ mensagem: error.details[0].message });
}
Se algo não estiver correto, o Joi retorna uma mensagem de erro clara, para que o usuário saiba exatamente o que está errado.

Futuras Melhorias
Aqui estão algumas ideias para melhorar ainda mais o projeto no futuro:

Adicionar autenticação com JWT para tornar o sistema mais seguro.
Implementar um banco de dados para persistir os dados dos usuários (no momento, tudo é armazenado em memória).
Adicionar testes automatizados para garantir que tudo funciona corretamente.
Contribuições
Sinta-se à vontade para contribuir! Se você tiver ideias para melhorar o projeto, abra uma issue ou envie um pull request.

Licença
Este projeto é open-source e está licenciado sob a Licença MIT.
