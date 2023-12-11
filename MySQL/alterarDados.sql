/* alterar tabela - adicionar coluna */
ALTER TABLE usuarios ADD COLUMN data_nascimento DATE;

/* alterar tabela - remover coluna */
ALTER TABLE usuarios DROP COLUMN data_nascimento;

/* modificar o tipo de uma coluna */
ALTER TABLE usuarios MODIFY COLUMN data_nascimento DATE;