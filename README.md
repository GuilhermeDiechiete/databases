## DATABASES

# MySQL 

### Start MySQL in Terminal

With the terminal open, write:

```
service mysql start 
```

Check if the server is connected:

```
service mysql status
```
<br>

### Login to MySQL

With MySQL server connected, write:

```
mysql -u *userName* -p 
```

The root name is usually used for the user.

After the login command, MySQL will ask for the password.

<br>


### CREATE DATABASE

```
CREATE DATABASE users;
```

<br>

### SHOW DATABASES

Check database creation:

```
show databases;
```

<br>

### USE DATABASE 

When using a database, we need to select it to avoid conflicts:

```
USE users;
```

<br>

### CREATE TABLES

```
CREATE TABLE users(
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

```
CREATE TABLE IF NOT EXISTS expenses(
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    user_id INT UNSIGNED NOT NULL,
    name VARCHAR(255) NOT NULL,
    area DECIMAL(10,2),
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);
```

```
CREATE TABLE IF NOT EXISTS categories(
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    user_id INT UNSIGNED NOT NULL,
    PRIMARY KEY (id),
    UNIQUE KEY (name),
    FOREIGN KEY (user_id) REFERENCES users (id)
);
```

```
CREATE TABLE products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    value DECIMAL(10, 2) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```


<br>

### SHOW TABLES

Shows the tables in the database:

```
SHOW tables;
```

### DESCRIBE TABLE

Describes table settings:

```
DESCRIBE users;
```

<br>

### SELECT TABLE

Select all in table

```
SELECT * FROM users;
```

Select Columns

```
SELECT name, email FROM users;
```
<br>

### SELECT TABLE with WHERE

We can use conditions to filter

```
SELECT name, email FROM users WHERE age > 10;
```

```
SELECT name, email FROM users WHERE name = 'Guilherme';
```

We can use WHERE with ORDER BY:

```
SELECT name, email FROM users WHERE age = 28 ORDER BY name;
```

<br>

### SELECT with operators AND, OR and NOT 

AND: All conditions must be true.

```
SELECT name, email FROM users WHERE age > 10 AND name = 'Dhaniela' AND password = '123456';
```

OR: Only one of the conditions needs to be true.

```
SELECT name, email FROM users WHERE age > 20 OR name = 'Guilherme';
```

NOT: It will not select entities if the condition is true.
```
SELECT name, email FROM users WHERE NOT name = 'Guilherme';
```
<br>

### ORDER BY Keyword

The ORDER BY keyword is used to sort the result-set in ascending or descending order.

The ORDER BY keyword sorts the records in ascending order by default. To sort the records in descending order, use the DESC keyword.

```
SELECT id, name, email FROM users ORDER BY name;
```

```
SELECT * FROM users ORDER BY age DESC;
```

```
SELECT * FROM users ORDER BY age ASC;
```

<br>

### SELECT with OPERATOR IN

The IN operator is the same as OR, just more practical:

```
SELECT * FROM users WHERE age IN (24,28,40);
```

### SELECT with OPERATOR BETWEEN

We can define the selection with a minimum and maximum value:

```
SELECT * FROM users
WHERE age BETWEEN 25 AND 35;
```
<br>

### SELECT with OPERATOR LIKE

We can select a data by initial or combinations: 

```
SELECT * FROM users WHERE name LIKE 'G%';
```

```
SELECT * FROM users WHERE name LIKE 'GU%';
```
<br>

We can also select to search for data at the end or make combinations:

```
SELECT * FROM users WHERE name LIKE '%a';
```

```
SELECT * FROM users WHERE name LIKE '%LA';
```
<br>

### SELECT with OPERATOR IS NULL

We can search for empty fields, with no value:

```
SELECT * FROM products WHERE description IS NULL;
```
<br>

### SELECT with OPERATOR LIMIT

We can search for records defining where we want to start from:

```
SELECT * FROM products LIMIT 2, 10;
```

<br>

### SELECT with OPERATOR REGEXP

Select data that contains the letter:

```
SELECT * FROM users WHERE name REGEXP 'a';
```

```
SELECT * FROM users WHERE name REGEXP 'v|g';
```

<br>

Select data with start:

```
SELECT * FROM users WHERE name REGEXP '^a';
```

```
SELECT * FROM users WHERE name REGEXP '^g|^d';
```
<br>

Select data that starts with letter and contains letter:

```
SELECT * FROM users WHERE name REGEXP '^g|e';
```



<br>

### INSERT DATA

```
INSERT INTO users(name, lastname, email, age, password) 
VALUES ('Guilherme', 'Diechiete', 'teste@gmail.com', 24, '123456');
```   

```
INSERT INTO users(name, lastname, email, age, password) 
VALUES ('Dhaniela', 'Souza', 'teste1@gmail.com', 29, '123456');
```  

<br>

Add several data in the same INSERT.

```
INSERT INTO users(name, lastname, email, age, password)
VALUES
  ('Alice', 'Johnson', 'alice.j@email.com', 28, 'pass123'),
  ('Bob', 'Smith', 'bob.smith@email.com', 35, 'pass456'),
  ('Charlie', 'Doe', 'charlie.d@email.com', 22, 'pass789'),
  ('David', 'Miller', 'david.m@email.com', 40, 'passabc'),
  ('Eva', 'Williams', 'eva.w@email.com', 31, 'passxyz'),
  ('Frank', 'Taylor', 'frank.t@email.com', 27, 'pass456'),
  ('Grace', 'Moore', 'grace.m@email.com', 33, 'pass123'),
  ('Henry', 'Brown', 'henry.b@email.com', 29, 'pass789'),
  ('Isabel', 'White', 'isabel.w@email.com', 38, 'passxyz'),
  ('Jack', 'Anderson', 'jack.a@email.com', 26, 'passabc');
``` 
<br>

### CHANGE DATA

We can perform operations on the data and show it in a new column:

```
SELECT name, email, password, (password + 505050) AS passwordhash
FROM users 
WHERE id = 1;
```

<br>

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

<br>

### Delete Table

```
DROP TABLE *tableName*
```

<br>

### Clear the Table

Para limpar uma tabela, use o comando TRUNCATE. Internamente, ele remove a tabela primeiro e, depois, a recria com a mesma estrutura — só que sem os dados. Se houver um contador AUTO_INCREMENT, na tabela em questão, ele é zerado e recolocado.

```
TRUNCATE TABLE nome-da-tabela;
```
 
