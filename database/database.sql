USE peluqueria;

CREATE TABLE especialidad(
    id INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
    descripcion VARCHAR(180)
);

/*DROP TABLE especialidad; */

/*EXEC sp_help especialidad;*/

INSERT INTO especialidad VALUES ('Rulos');
INSERT INTO especialidad VALUES ('Masaje');
INSERT INTO especialidad VALUES ('Corte caballero');

SELECT * FROM especialidad;

CREATE TABLE empleado(
    dni INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
    nombre VARCHAR(180),
    apellido_paterno VARCHAR(180),
    apellido_materno VARCHAR(180),
    especialidad INT FOREIGN KEY REFERENCES especialidad(id)
);

INSERT INTO empleado VALUES ('Maria', 'Lopez', 'Aguilar', 2);
INSERT INTO empleado VALUES ('Armando', 'Martinez', 'Najera', 1);
INSERT INTO empleado VALUES ('Sofia', 'Villanueva', 'Garcia', 3);

SELECT * FROM empleado;

CREATE TABLE cliente(
    dni INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
    nombre VARCHAR(180),
    apellido_paterno VARCHAR(180),
    apellido_materno VARCHAR(180),
    profesion VARCHAR(180),
    telefono VARCHAR(180),
    calle VARCHAR(180),
    colonia VARCHAR(180),
    numero_casa VARCHAR(180),
    tratamientos_medicos VARCHAR(255)
);

INSERT INTO cliente VALUES ('Manuel', 'Rosales', 'Hernandez', 'Profesor', '844-556-6316', 'Salvador Rueda', 'Anahuac', '345A', 'Apendicitis');
INSERT INTO cliente VALUES ('Abigail', 'Gutierrez', 'Perez', 'Contadora', '811-776-9981', 'Pedro Ampudia', 'Guayulera', '784', 'Ninguno');
INSERT INTO cliente VALUES ('Hortensia', 'Ortega', 'Ortiz', 'Quimica', '844-160-0964', 'Juan Saade Murra', 'Tulipanes', '635', 'Mareos');
INSERT INTO cliente VALUES ('Rodolfo', 'Rivera', 'Monjaras', 'Programador', '811-333-0955', 'Puerta de Oriente', 'Asia', '342', 'Ninguno');
INSERT INTO cliente VALUES ('Ezra', 'Medina', 'Ortega', 'Directora de primaria', '844-231-6065', 'Cactus', 'Sol naciente', '654A', 'Paro cardiaco');

SELECT * FROM cliente;

CREATE TABLE servicio(
    id INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
    dni_cliente INT,
    dni_empleado INT,
    servicio VARCHAR(180),
    fecha_hora DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (dni_cliente) REFERENCES cliente(dni),
    FOREIGN KEY (dni_empleado) REFERENCES empleado(dni)
);

INSERT INTO servicio VALUES (1, 1, 'Corte caballero', DATETIMEFROMPARTS(2019, 3, 30, 20, 30, 0, 0));
INSERT INTO servicio VALUES (2, 3, 'Rulos', DEFAULT);
INSERT INTO servicio VALUES (3, 2, 'Masaje', DATETIMEFROMPARTS(2018, 12, 12, 11, 30, 0, 0));

SELECT * FROM servicio;

CREATE TABLE cita(
    id INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
    fecha_hora DATETIME,
    dni_cliente INT,
    dni_empleado INT,
    FOREIGN KEY (dni_cliente) REFERENCES cliente(dni),
    FOREIGN KEY (dni_empleado) REFERENCES empleado(dni)
);

INSERT INTO cita VALUES (DATETIMEFROMPARTS(2019, 05, 20, 13, 30, 0, 0), 5, 3);
INSERT INTO cita VALUES (DATETIMEFROMPARTS(2019, 05, 21, 16, 30, 0, 0), 4, 1);
INSERT INTO cita VALUES (DATETIMEFROMPARTS(2019, 05, 21, 17, 00, 0, 0), 3, 3);

SELECT * FROM cita;

CREATE TABLE cosmetico(
    codigo INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
    nombre VARCHAR(180),
    cantidad INT,
    PRECIO FLOAT
);

INSERT INTO cosmetico VALUES ('Brocha para ojos', 10, 161.90);
INSERT INTO cosmetico VALUES ('Tratamiento para pestañas', 20, 233.90);
INSERT INTO cosmetico VALUES ('Crema rizado natural', 10, 300.50);
INSERT INTO cosmetico VALUES ('Pete and Pedro Putty', 50, 100.50);

SELECT * FROM cosmetico;


CREATE TABLE venta(
    id INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
    comision FLOAT,
    dni_cliente INT,
    dni_empleado INT,
    codigo_cosmetico INT,
    FOREIGN KEY (dni_empleado) REFERENCES empleado(dni),
    FOREIGN KEY (dni_cliente) REFERENCES cliente(dni),
    FOREIGN KEY (codigo_cosmetico) REFERENCES cosmetico(codigo)
);

INSERT INTO venta VALUES (.12, 2, 1, 1);
INSERT INTO venta VALUES (.10, 3, 3, 3);
INSERT INTO venta VALUES (.20, 1, 2, 4);

SELECT * FROM venta;

