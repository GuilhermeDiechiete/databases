INSERT INTO estados(nome, sigla, regiao, populacao) 
VALUES ("Acre", "AC", "Norte", 0.83);

INSERT INTO estados(nome, sigla, regiao, populacao) 
VALUES 
    ("Alagoas", "AL", "Nordeste", 3.38),
    ("Amapá", "AP", "Norte", 0.8),
    ("Amazonas", "AM", "Norte", 4.06);
    


-- inserindo cidades
INSERT INTO cidades(nome, area, estado_id)
VALUES ("CidadeAmazonas", 795, 4);


INSERT INTO cidades(nome, area, estado_id)
VALUES ("CidadeDoAcre", 150, 1);


-- inserindo prefeitos
INSERT INTO prefeitos (nome, cidade_id)
VALUES ("Guilherme", 2),
("Dhaniela", 1),
("Neusa", 3),
("Antonio", null);