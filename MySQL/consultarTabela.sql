
-- selecionar tudo na tabela
select * from estados;

-- selecionar apenas algumas colunas
select nome, sigla from estados;

-- selecionar colunas na tabela estados com filtro regiao
select sigla, nome as "Nome do Estado" from estados where regiao = "Nordeste";

select nome, regiao from estados where populacao <= 10;
