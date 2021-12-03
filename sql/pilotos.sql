CREATE TABLE pilotos(
    id int AUTO_INCREMENT not null unique PRIMARY KEY,
    idEquipo int not null unique,
    nombre varchar(50) not null,
    apellido varchar(50) not null ,
    siglas varchar(3) unique not null,
    foto varchar(500),
    CONSTRAINT fk_idEquipo FOREIGN KEY (idEquipo) REFERENCES equipos (id)
);