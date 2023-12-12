# DATABASES

## MySQL 

#### Commands to start mysql in terminal

Start MySQL server

```
service mysql start 
```

Check if the server is connected

```
service mysql status
```

#### Login to MySQL

With MySQL server connected, write:

```
mysql -u *userName* -p 
```

The root name is usually used for the user.

After the login command, MySQL will ask for the password.

#### Create Database

```
create database *nameDatabase*;
```

#### Show Databases

```
show databases;
```

#### Use Database 

```
use database *nameDatabase*;
```

#### Create Tables

```
create table estados(
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL,
    sigla VARCHAR(2) NOT NULL, 
    regiao ENUM("Norte", "Nordeste", "Centro-Oeste", "Sudente", "Sul") NOT NULL,
    populacao DECIMAL(5,2) NOT NULL, 
    PRIMARY KEY (id),
    UNIQUE KEY (nome),
    UNIQUE KEY (sigla)
);
```

```
create table if not exists cidades(
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    estado_id INT UNSIGNED NOT NULL, 
    area DECIMAL(10,2),
    PRIMARY KEY (id),
    FOREIGN KEY (estado_id) REFERENCES estados(id)
);
```

```
CREATE TABLE IF NOT EXISTS prefeitos(
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    cidade_id INT UNSIGNED,
    PRIMARY KEY (id),
    UNIQUE KEY (cidade_id),
    FOREIGN KEY (cidade_id) REFERENCES cidades (id)
);
```

```
create table users(
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) NOT NULL,
    lastname VARCHAR(45) NOT NULL, 
    email VARCHAR(100) NOT NULL,
    age INT(3) NOT NULL, 
    password VARCHAR(200) NOT NULL,
    PRIMARY KEY (id),
    UNIQUE KEY (email)
);
```
 
