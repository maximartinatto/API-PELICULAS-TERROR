CREATE DATABASE IF NOT EXISTS peliculadb;

USE peliculadb;

CREATE TABLE pelicula(
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) DEFAULT NULL,
    genero VARCHAR(45),
    director VARCHAR(50) DEFAULT NULL,
    protagonista VARCHAR(50),
    fecha_estreno DATE,
    duracion VARCHAR(11),
    recaudacion VARCHAR(35),
    PRIMARY KEY(id)

);

DESCRIBE pelicula;

INSERT INTO pelicula VALUES
    (1, 'El Conjuro', 'Terror sobrenatural', 'James Wan', 'Patrick Wilson', '2013-07-19', '112 minutos','USD $20 millones'),
    (2, 'El Resplandor', 'Terror sobrenatural', 'Stanley Kubrick', 'Jack Nicholson', '1980-12-25', '146 minutos','USD $44 millones'),
    (3, 'Insidious', 'Terror sobrenatural', 'James Wan', 'Patrick Wilson', '2011-04-01', '102 minutos','USD $97 millones');
