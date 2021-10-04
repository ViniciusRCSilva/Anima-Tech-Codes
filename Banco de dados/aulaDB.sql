use aulabd_gama;

create table alunos (
	id int not null primary key auto_increment,
	nome varchar(30),
    email varchar(30),
    celular varchar(15)
);

insert into aulabd_gama.alunos values (null , "Fernando", "fernando@gmail.com", "99999-9998");

drop table alunos;

select * from alunos;