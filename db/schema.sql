drop database if exists burgers_db;

create database burgers_db;

use burgers_db;

create table burgers (
    id integer auto_increment not null,
    burger_name varchar(100),
    devoured boolean default false,
    primary key (id)
);


