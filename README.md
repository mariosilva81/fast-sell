
# Fast Sell

## Descrição

Seja bem-vindo à documentação da API criada para otimizar a administração de um e-commerce. Essa API proporciona uma ampla gama de funcionalidades, facilitando aos usuários o cadastro de clientes, produtos e pedidos.

Trabalho para conclusão do Curso de Back-end na Cubos Academy.

## Autores

Mario Silva, Tiago Raupp, Anderson Damico e Rafael Isidro

## Versão

1.0.1

## Tecnologias Utilizadas

<div style="display: flex;">
  <img src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg" height="50" alt="Node.js" style="margin-right: 20px;">
  <img src="https://static-00.iconduck.com/assets.00/js-icon-2048x2048-kbwt89q3.png" height="50" alt="JavaScript" style="margin-right: 20px;">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPWXoi7cy3HEsFJ8kqj7FQisLz0IBP9r7hW-4RysSgRZKI0BLQm46I0nn-PwKi2112FaU&usqp=CAU" height="50" alt="Express" style="margin-right: 20px;">
  <img src="https://cdn-icons-png.flaticon.com/512/5968/5968342.png" height="50" alt="Postgres" style="margin-right: 20px;">
</div>

## Instalação

1. Clone o repositório: 

```bash
git clone git@github.com:mariosilva81/fast-sell.git
```

2. Instale as dependências: 

```bash
npm install 

ou 

yarn install
```

## Configuração do Ambiente

Certifique-se de configurar as variáveis de ambiente necessárias no arquivo `.env`, usando com base o `.env.example`, localizado na raiz do projeto.

## Configuração do Banco de Dados

1. Instalação do PostgreSQL

Certifique-se de ter o PostgreSQL instalado em seu sistema. Você pode baixá-lo em [https://www.postgresql.org/download/](https://www.postgresql.org/download/).

2. Inicialização do Serviço

Após a instalação, inicie o serviço do PostgreSQL. Os comandos podem variar de acordo com o sistema operacional, mas geralmente incluem:

- **Linux:**

```bash
sudo service postgresql start
```

- **Windows:**

Vá para o "Painel de Controle" > "Ferramentas Administrativas" > "Serviços".
Localize o serviço PostgreSQL e inicie-o.

- **MacOS:**

```bash
pg_ctl -D /usr/local/var/postgres start
```

3. Acesso ao Banco de Dados

Por padrão, o PostgreSQL cria um banco de dados chamado postgres. Você pode acessá-lo usando o utilitário psql no terminal:

```bash
psql -U postgres
```

Isso abrirá uma sessão interativa com o banco de dados postgres usando o usuário postgres. Você pode ser solicitado a fornecer a senha.

4. Criar um Novo Banco de Dados

Dentro do shell psql, execute o seguinte comando para criar um novo banco de dados:

```bash
CREATE DATABASE nome_do_banco_de_dados;
```

Substitua `nome_do_banco_de_dados` pelo nome desejado para o seu banco de dados.

5. Criação de tabelas

Utilize as queries localizadas na pasta `src/database/dump.sql` para criar as tabelas e popular a tabela `categories`.

## Executando o Projeto

Execute o seguinte comando para iniciar o servidor:

```bash
$ npm run dev
```

O servidor local estará acessível em [http://localhost:3000](http://localhost:3000). 
Observação: A porta poderá ser diferente caso tenha configurado de outra forma no `.env`.

## Endpoints

|`Método`| `Endpoint`        | `Responsabilidade`                 | `Autenticação` |
| ------ | ----------------- | ---------------------------------- | -------------- |
| POST   | /login            | Autenticação de usuários           | Sem Token      |
| GET    | /category         | Gerenciamento de categorias        | Sem Token      |
| POST   | /user             | Cria um usuário                    | Sem Token      |
| GET    | /user             | Exibe os dados do usuário logado   | Com Token      |
| PUT    | /user             | Edita os dados do usuário logado   | Com Token      |
| POST   | /client           | Cria um cliente                    | Com Token      |
| GET    | /client           | Lista todos os clientes            | Com Token      |
| GET    | /client/:id       | Exibe os dados de um cliente       | Com Token      |
| PUT    | /client/:id       | Edita os dados de um cliente       | Com Token      |
| POST   | /product          | Cria um produto                    | Com Token      |
| GET    | /product          | Lista todos os produtos            | Com Token      |
| GET    | /product/:id      | Exibe os dados de um produto       | Com Token      |
| PUT    | /product/:id      | Edita os dados de um produto       | Com Token      |
| DELETE | /product/:id      | Exclui um produto                  | Com Token      |
| POST   | /order            | Cria um pedido                     | Com Token      |
| GET    | /order            | Lista todos os pedidos             | Com Token      |
| GET    | /order?client_id= | Exibe os dados de um pedido        | Com Token      |

Verifique o arquivo `insomnia.json` disponibilizado na raiz do projeto. Nele estão contidas todas as rotas e métodos HTTP disponíveis na aplicação, que pode ser importado no Insomnia ou qualquer outro client HTTP, para realizar requisições.


## Deploy

Caso queira testar a aplicação em produção, a mesma está disponível em [https://fast-sell.onrender.com](https://fast-sell.onrender.com).

## Contato

Para questões ou sugestões, entre em contato através do email: mariosilva.81@icloud.com.
