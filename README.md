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

#### Insert Data

```
INSERT INTO estados(nome, sigla, regiao, populacao) 
VALUES ("Acre", "AC", "Norte", 0.83);
```

```
INSERT INTO estados(nome, sigla, regiao, populacao) 
VALUES 
    ("Alagoas", "AL", "Nordeste", 3.38),
    ("Amapá", "AP", "Norte", 0.8),
    ("Amazonas", "AM", "Norte", 4.06);
```   

```
INSERT INTO cidades(nome, area, estado_id)
VALUES ("CidadeAmazonas", 795, 4);
```

```
INSERT INTO cidades(nome, area, estado_id)
VALUES ("CidadeDoAcre", 150, 1);
```

```
INSERT INTO prefeitos (nome, cidade_id)
VALUES ("Guilherme", 2),
("Dhaniela", 1),
("Neusa", 3),
("Antonio", null);
```

#### Consult Table

Select all in table

```
select * from *tableName*;
```

Select Columns

```
select *column1*, *column2* from *tableName*;
```

Select columns with filter

```
select column1, username as *Guilherme* from *tableUser* where age = "18";
```

```
select name, user from tableUser where age <= 10;
```
 
