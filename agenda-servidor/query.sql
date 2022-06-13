create database agenda_cell;

use agenda_cell;


create table agenda (
    id int(11) not null primary key AUTO_INCREMENT,
    titulo varchar(45) not null,
    descriptcion varchar(100) not null,
    creacion timestamp not null DEFAULT current_timestamp
    );

insert into agenda (titulo,descriptcion)values
 ("dormir","hoy voy a dormir temprano"),
 ("estudiar","empezar a estudiar para el parcial")