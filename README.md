## DATABASES

# MySQL 

### Commands to start mysql in terminal

Start MySQL server

```
service mysql start 
```

Check if the server is connected

```
service mysql status
```

### Login to MySQL

With MySQL server connected, write:

```
mysql -u *userName* -p 
```

The root name is usually used for the user.

After the login command, MySQL will ask for the password.

### Create Database

```
create database *nameDatabase*;
```

### Show Databases

```
show databases;
```

### Use Database 

```
use database *nameDatabase*;
```

### Create Tables

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

### Show Table

```
DESCRIBE *tableName*
```


### Change Data

```
UPDATE clientes SET numEmpregados=1999 WHERE idCliente = 1;
```

### Select Table

Select all in table

```
select * from table-name;
```

Select Columns

```
select column1, column2 from table-name;
```

### SELECT Table with WHERE

```
SELECT column1, column2 FROM table-name WHERE condicion;
```

Example:

```
SELECT name, lasname FROM table-name WHERE age <= 10;
```

```
select column1, username as *Guilherme* from *tableUser* where age = "18";
```

### AND, OR anda NOT Operators

AND:

```
SELECT column1, column2 FROM table-name WHERE condicion1 AND condicion2 AND condicion3;
```

OR:

```
SELECT column1, column2 FROM table-name WHERE condicion1 OR condicion2 OR condicion3;
```

```
SELECT column1, column2 FROM table_name WHERE NOT condition;
```

### ORDER BY Keyword

The ORDER BY keyword is used to sort the result-set in ascending or descending order.
The ORDER BY keyword sorts the records in ascending order by default. To sort the records in descending order, use the DESC keyword.

```
SELECT column1, column2 FROM table-name ORDER BY column1, column2 ASC|DESC;
```

```
SELECT * FROM table-name ORDER BY column2;
```

```
SELECT * FROM table-name ORDER BY column2 DESC;
```

```
SELECT * FROM table-name ORDER BY column1 ASC, column2 DESC;
```

### Insert Data

```
INSERT INTO table-name(column1, column2, column3, column4) 
VALUES (value1, value2, value3, value4);
```

Example:

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

### Delete register table 

```
DELETE FROM *nome-da-tabela* WHERE *nome-da-coluna*=texto;
```

```
DELETE FROM clientes WHERE *nomeEmpresa* = 'Aliquam Inc.';
```

```
DELETE FROM clientes WHERE idCliente = 2;
```

### Delete Table

```
DROP TABLE *tableName*
```

### Clear the Table

Para limpar uma tabela, use o comando TRUNCATE. Internamente, ele remove a tabela primeiro e, depois, a recria com a mesma estrutura — só que sem os dados. Se houver um contador AUTO_INCREMENT, na tabela em questão, ele é zerado e recolocado.

```
TRUNCATE TABLE nome-da-tabela;
```
 
