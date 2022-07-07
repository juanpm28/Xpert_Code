-- CODIGO

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema VengadoresLimpieza
-- -----------------------------------------------------
CREATE SCHEMA `VengadoresLimpieza` DEFAULT CHARACTER SET utf8mb3 ;
USE `VengadoresLimpieza` ;

-- -----------------------------------------------------
-- Table `VengadoresLimpieza`.`productos`
-- -----------------------------------------------------
CREATE TABLE `VengadoresLimpieza`.`productos` (
  `idProducto` INT NOT NULL AUTO_INCREMENT,
  `SKU` VARCHAR(12) NULL DEFAULT NULL,
  `nombre` VARCHAR(100) NULL DEFAULT NULL,
  `precio` FLOAT(5,2) NULL DEFAULT NULL,
  `cantidad` VARCHAR(3) NULL,
  PRIMARY KEY (`idProducto`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `VengadoresLimpieza`.`servicios`
-- -----------------------------------------------------
CREATE TABLE `VengadoresLimpieza`.`servicios` (
  `idservicios` INT NOT NULL AUTO_INCREMENT,
  `nombrePaquete` VARCHAR(100) NULL DEFAULT NULL,
  `SKU` VARCHAR(12) NULL DEFAULT NULL,
  `precio` FLOAT(5,2) NULL DEFAULT NULL,
  `fecha` VARCHAR(45) NULL,
  `hora` VARCHAR(45) NULL,
  PRIMARY KEY (`idservicios`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `VengadoresLimpieza`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE `VengadoresLimpieza`.`usuarios` (
  `idusuarios` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(60) NULL,
  `correo` VARCHAR(45) NULL DEFAULT NULL,
  `telefono` VARCHAR(10) NULL DEFAULT NULL,
  `contrasena` VARCHAR(20) NULL DEFAULT NULL,
  PRIMARY KEY (`idusuarios`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `VengadoresLimpieza`.`pedidos`
-- -----------------------------------------------------
CREATE TABLE `VengadoresLimpieza`.`pedidos` (
  `idpedidios` INT NOT NULL AUTO_INCREMENT,
  `productos_idProducto` INT NOT NULL,
  `servicios_idservicios` INT NOT NULL,
  `resumenPedido` VARCHAR(1000) NULL,
  `costoTotal` VARCHAR(45) NULL,
  `usuarios_idusuarios` INT NOT NULL,
  PRIMARY KEY (`idpedidios`, `productos_idProducto`, `servicios_idservicios`, `usuarios_idusuarios`),
  INDEX `fk_pedidos_productos1_idx` (`productos_idProducto` ASC) VISIBLE,
  INDEX `fk_pedidos_servicios1_idx` (`servicios_idservicios` ASC) VISIBLE,
  INDEX `fk_pedidos_usuarios1_idx` (`usuarios_idusuarios` ASC) VISIBLE,
  CONSTRAINT `fk_pedidos_productos1`
    FOREIGN KEY (`productos_idProducto`)
    REFERENCES `VengadoresLimpieza`.`productos` (`idProducto`),
  CONSTRAINT `fk_pedidos_servicios1`
    FOREIGN KEY (`servicios_idservicios`)
    REFERENCES `VengadoresLimpieza`.`servicios` (`idservicios`),
  CONSTRAINT `fk_pedidos_usuarios1`
    FOREIGN KEY (`usuarios_idusuarios`)
    REFERENCES `VengadoresLimpieza`.`usuarios` (`idusuarios`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


-- AGREGAR PRODUCTOS

USE vengadoreslimpieza;

-- Agregar Usuarios

INSERT INTO usuarios(nombre, correo, telefono, contrasena) VALUES ('Gustavo', 'gustavo@gmail.com', '9141061721', 'Gustavito99');
INSERT INTO usuarios(nombre, correo, telefono, contrasena) VALUES ('Juan Perez', 'juanito.p10@hotmail.com', '5874356415', 'abcd1234');
INSERT INTO usuarios(nombre, correo, telefono, contrasena) VALUES ('Raul Hernandez', 'raulhdz15@live.com', '5487960254', 'Raul1345');
INSERT INTO usuarios(nombre, correo, telefono, contrasena) VALUES ('Diego', 'dieguito13@gmail.com', '5875061721', '1314Die');
INSERT INTO usuarios(nombre, correo, telefono, contrasena) VALUES ('Andrea', 'andy12@gmail.com', '6502456987', 'password123');

-- Agregar Productos

INSERT INTO productos(SKU, nombre, precio) VALUES ('8899AACBX', 'Esponja para trastes', '15.5');
INSERT INTO productos(SKU, nombre, precio) VALUES ('8796AACCY', 'Trapeador', '96.00');
INSERT INTO productos(SKU, nombre, precio) VALUES ('2219AASLX', 'Cloro', '45.00');
INSERT INTO productos(SKU, nombre, precio) VALUES ('82349ASLA', 'Trapo de microfibra', '20.50');
INSERT INTO productos(SKU, nombre, precio) VALUES ('1103989AI', 'Escoba', '65.60');

-- Agregar Servicios

INSERT INTO servicios(nombrePaquete, SKU, precio) VALUES ('Paquete Basic, hasta 70m²', 'PAENT10', '1490.00');
INSERT INTO servicios(nombrePaquete, SKU, precio) VALUES ('Paquete Deluxe, hasta 110m²', 'PAEME25', '2599.00');
INSERT INTO servicios(nombrePaquete, SKU, precio) VALUES ('Paquete Premium, hasta 200m²', 'PASUM40', '3999.00');
INSERT INTO servicios(nombrePaquete, SKU, precio) VALUES ('Paquete Diamond, hasta servicios300m²', 'PAHPM50', '4599.00');
INSERT INTO servicios(nombrePaquete, SKU, precio) VALUES ('Paquete Platinum, hasta 500m²', 'PFDAH60', '5999.00');

-- Agregar Pedidos

INSERT INTO pedidos(productos_idProducto, servicios_idservicios,usuarios_idusuarios) VALUES (1, 3, 1);
INSERT INTO pedidos(productos_idProducto, servicios_idservicios,usuarios_idusuarios) VALUES (0, 3, 2);
INSERT INTO pedidos(productos_idProducto, servicios_idservicios,usuarios_idusuarios) VALUES (0, 4, 3);
INSERT INTO pedidos(productos_idProducto, servicios_idservicios,usuarios_idusuarios) VALUES (0, 3, 4);
INSERT INTO pedidos(productos_idProducto, servicios_idservicios,usuarios_idusuarios) VALUES (0, 3, 5);




