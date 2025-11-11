# Para criar o arquivo de configuração base "package.json"
npm init -y

# Instalar a biblioteca express para (Rotas)
npm install express

# Código de erro HTTP
https://www.httpstatus.com.br/


# Instalar a biblioteca cors para (Permitir requisições de outras origens)
npm install cors 


# Gerenciador de banco de dados
pgAdmin - Gerenciador do PostgreSQL



--------------------------------------------------------------------------------
https://statics.teams.cdn.office.net/evergreen-assets/safelinks/2/atp-safelinks.html

https://github.com/lucasbarzan/gobarber



create table usuarios(
	id SERIAL primary key,
	nome varchar(255),
	email varchar(255) unique,
	senha varchar(255),	
);

create table financeiros(
	id SERIAL primary key,
	descricao varchar(255),
	valor real,
	tipo varchar(50),
	usuarioId integer,
	CONSTRAINT fk_usuario FOREIGN KEY (usuarioId) REFERENCES usuarios(id)
);

insert usuarios (nome, email, senha) values ("Fernando Soares", "fernando.smotta@gmail.com", "123456");