DROP TABLE IF EXISTS usuarios;
DROP TABLE IF EXISTS categorias;
DROP TABLE IF EXISTS produtos;
DROP TABLE IF EXISTS clientes;
DROP TABLE IF EXISTS pedidos;
DROP TABLE IF EXISTS pedido_produtos;

CREATE TABLE IF NOT EXISTS usuarios (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  senha VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS categorias (
  id SERIAL PRIMARY KEY,
  descricao VARCHAR(255)
);

INSERT INTO categorias (descricao)
VALUES 
  ('Informática'),
  ('Celulares'),
  ('Beleza e Perfumaria'),
  ('Mercado'),
  ('Livros e Papelaria'),
  ('Brinquedos'),
  ('Moda'),
  ('Bebê'),
  ('Games')
;

CREATE TABLE IF NOT EXISTS produtos (
  id SERIAL PRIMARY KEY,
  descricao VARCHAR(255) NOT NULL,
  quantidade_estoque INTEGER NOT NULL CHECK (quantidade_estoque > 0),
  valor INTEGER NOT NULL CHECK (valor > 0),
  produto_imagem VARCHAR(255), 
  categoria_id INTEGER REFERENCES categorias (id)
);

CREATE TABLE IF NOT EXISTS clientes (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  cpf VARCHAR(11) NOT NULL UNIQUE,
  cep VARCHAR(8),
  rua VARCHAR(255),
  numero INTEGER CHECK (numero > 0),
  bairro VARCHAR(50),
  cidade VARCHAR(50),
  estado VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS pedidos (
  id SERIAL PRIMARY KEY,
  cliente_id INTEGER NOT NULL,
  observacao VARCHAR(255),
  valor_total INTEGER NOT NULL CHECK (valor_total > 0)
);

CREATE TABLE IF NOT EXISTS pedido_produtos (
  id SERIAL PRIMARY KEY,
  pedido_id INTEGER NOT NULL REFERENCES pedidos (id),
  produto_id INTEGER NOT NULL REFERENCES produtos (id),
  quantidade_produto INTEGER NOT NULL,
  valor_produto INTEGER NOT NULL CHECK (valor_produto > 0)
);