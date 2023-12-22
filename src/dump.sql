DROP TABLE IF EXISTS users;

DROP TABLE IF EXISTS categories;

DROP TABLE IF EXISTS products;

DROP TABLE IF EXISTS clients;

DROP TABLE IF EXISTS orders;

DROP TABLE IF EXISTS order_products;

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS categories (
  id SERIAL PRIMARY KEY,
  description VARCHAR(255)
);

INSERT INTO
  categories (description)
VALUES
  ('Electronics'),
  ('Mobile Phones'),
  ('Beauty and Fragrance'),
  ('Grocery'),
  ('Books and Stationery'),
  ('Toys'),
  ('Fashion'),
  ('Baby'),
  ('Games');

CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY,
  description VARCHAR(255) NOT NULL,
  stock_quantity INTEGER NOT NULL CHECK (stock_quantity > 0),
  value INTEGER NOT NULL CHECK (value > 0),
  product_image VARCHAR(255),
  category_id INTEGER REFERENCES categories (id)
);

CREATE TABLE IF NOT EXISTS clients (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  cpf VARCHAR(11) NOT NULL UNIQUE,
  zip VARCHAR(8),
  street VARCHAR(255),
  number INTEGER CHECK (numero > 0),
  neighborhood VARCHAR(50),
  city VARCHAR(50),
  state VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS orders (
  id SERIAL PRIMARY KEY,
  client_id INTEGER NOT NULL,
  observation VARCHAR(255),
  total_value INTEGER NOT NULL CHECK (total_value > 0)
);

CREATE TABLE IF NOT EXISTS order_products (
  id SERIAL PRIMARY KEY,
  order_id INTEGER NOT NULL REFERENCES orders (id),
  product_id INTEGER NOT NULL REFERENCES products (id),
  product_quantity INTEGER NOT NULL,
  product_value INTEGER NOT NULL CHECK (product_value > 0)
);