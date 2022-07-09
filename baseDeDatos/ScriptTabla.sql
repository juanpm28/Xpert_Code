-- CODIGO

-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';


-- -----------------------------------------------------
-- Schema VengadoresLimpiezaXC1
-- -----------------------------------------------------
CREATE SCHEMA `VengadoresLimpiezaXC1` DEFAULT CHARACTER SET utf8mb3 ;
USE `VengadoresLimpiezaXC1` ;

-- -----------------------------------------------------
-- Table `VengadoresLimpiezaXC1`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE `VengadoresLimpiezaXC1`.`usuarios` (
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
-- Table `VengadoresLimpiezaXC1`.`productos`
-- -----------------------------------------------------
CREATE TABLE `VengadoresLimpiezaXC1`.`productos` (
  `idProducto` INT NOT NULL AUTO_INCREMENT,
  `SKU` VARCHAR(12) NULL DEFAULT NULL,
  `nombre` VARCHAR(100) NULL DEFAULT NULL,
  `precio` FLOAT(6,2) NULL DEFAULT NULL,
  `cantidad` VARCHAR(3) NULL,
  `url_img` VARCHAR(120) NULL,
  PRIMARY KEY (`idProducto`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `VengadoresLimpiezaXC1`.`pedidos`
-- -----------------------------------------------------
CREATE TABLE `VengadoresLimpiezaXC1`.`pedidos` (
  `idpedidos` INT NOT NULL AUTO_INCREMENT,
  `resumenPedido` VARCHAR(1000) NULL,
  `costoTotal` FLOAT NULL,
  `usuarios_idusuarios` INT NOT NULL,
  `productos_idProducto` INT NOT NULL,
  PRIMARY KEY (`idpedidos`, `usuarios_idusuarios`, `productos_idProducto`),
  INDEX `fk_pedidos_usuarios1_idx` (`usuarios_idusuarios` ASC) VISIBLE,
  INDEX `fk_pedidos_productos1_idx` (`productos_idProducto` ASC) VISIBLE,
  CONSTRAINT `fk_pedidos_usuarios1`
    FOREIGN KEY (`usuarios_idusuarios`)
    REFERENCES `VengadoresLimpiezaXC1`.`usuarios` (`idusuarios`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_pedidos_productos1`
    FOREIGN KEY (`productos_idProducto`)
    REFERENCES `VengadoresLimpiezaXC1`.`productos` (`idProducto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `VengadoresLimpiezaXC1`.`servicios`
-- -----------------------------------------------------
CREATE TABLE `VengadoresLimpiezaXC1`.`servicios` (
  `idservicios` INT NOT NULL AUTO_INCREMENT,
  `nombrePaquete` VARCHAR(100) NULL DEFAULT NULL,
  `SKU` VARCHAR(12) NULL DEFAULT NULL,
  `precio` FLOAT(6,2) NULL DEFAULT NULL,
  `fecha` VARCHAR(45) NULL,
  `hora` VARCHAR(45) NULL,
  `url_imagen` VARCHAR(120) NULL,
  PRIMARY KEY (`idservicios`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `VengadoresLimpiezaXC1`.`pedidosServicios`
-- -----------------------------------------------------
CREATE TABLE `VengadoresLimpiezaXC1`.`pedidosServicios` (
  `idpedidios` INT NOT NULL AUTO_INCREMENT,
  `resumenPedido` VARCHAR(1000) NULL,
  `costoTotal` FLOAT NULL,
  `servicios_idservicios` INT NOT NULL,
  `usuarios_idusuarios` INT NOT NULL,
  PRIMARY KEY (`idpedidios`, `servicios_idservicios`, `usuarios_idusuarios`),
  INDEX `fk_pedidosServicios_servicios1_idx` (`servicios_idservicios` ASC) VISIBLE,
  INDEX `fk_pedidosServicios_usuarios1_idx` (`usuarios_idusuarios` ASC) VISIBLE,
  CONSTRAINT `fk_pedidosServicios_servicios1`
    FOREIGN KEY (`servicios_idservicios`)
    REFERENCES `VengadoresLimpiezaXC1`.`servicios` (`idservicios`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_pedidosServicios_usuarios1`
    FOREIGN KEY (`usuarios_idusuarios`)
    REFERENCES `VengadoresLimpiezaXC1`.`usuarios` (`idusuarios`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


-- AGREGAR PRODUCTOS

USE vengadoreslimpiezaxc1;


-- Agregar Usuarios

INSERT INTO usuarios(nombre, correo, telefono, contrasena) VALUES ('Gustavo', 'gustavo@gmail.com', '9141061721', 'Gustavito99');
INSERT INTO usuarios(nombre, correo, telefono, contrasena) VALUES ('Juan Perez', 'juanito.p10@hotmail.com', '5874356415', 'abcd1234');
INSERT INTO usuarios(nombre, correo, telefono, contrasena) VALUES ('Raul Hernandez', 'raulhdz15@live.com', '5487960254', 'Raul1345');
INSERT INTO usuarios(nombre, correo, telefono, contrasena) VALUES ('Diego', 'dieguito13@gmail.com', '5875061721', '1314Die');
INSERT INTO usuarios(nombre, correo, telefono, contrasena) VALUES ('Andrea', 'andy12@gmail.com', '6502456987', 'password123');


-- Agregar Productos

INSERT INTO productos(SKU, nombre, precio, cantidad, url_img) VALUES ('8899AACBX', 'Esponja para trastes', '16.50', '20', '//carpeta');
INSERT INTO productos(SKU, nombre, precio, cantidad, url_img) VALUES ('8796AACCY', 'Trapeador', '96.00', '20', '//carpeta');
INSERT INTO productos(SKU, nombre, precio, cantidad, url_img) VALUES ('2219AASLX', 'Cloro', '45.00', '20', '//carpeta');
INSERT INTO productos(SKU, nombre, precio, cantidad, url_img) VALUES ('82349ASLA', 'Trapo de microfibra', '20.50', '20', '//carpeta');
INSERT INTO productos(SKU, nombre, precio, cantidad, url_img) VALUES ('1103989AI', 'Escoba', '65.60', '20', '//carpeta');


-- Agregar Servicios

INSERT INTO servicios(nombrePaquete, SKU, precio, fecha, hora, url_imagen) VALUES ('Paquete Basic, hasta 70m²', 'PAENT10', '1490.00', '20-10-2022', '10:10 A.M.', '//carpeta');
INSERT INTO servicios(nombrePaquete, SKU, precio, fecha, hora, url_imagen) VALUES ('Paquete Deluxe, hasta 110m²', 'PAEME25', '2599.00', '20-10-2022', '10:10 A.M.', '//carpeta');
INSERT INTO servicios(nombrePaquete, SKU, precio, fecha, hora, url_imagen) VALUES ('Paquete Premium, hasta 200m²', 'PASUM40', '3999.00', '20-10-2022', '10:10 A.M.', '//carpeta');
INSERT INTO servicios(nombrePaquete, SKU, precio, fecha, hora, url_imagen) VALUES ('Paquete Diamond, hasta servicios300m²', 'PAHPM50', '4599.00', '20-10-2022', '10:10 A.M.', '//carpeta');
INSERT INTO servicios(nombrePaquete, SKU, precio, fecha, hora, url_imagen) VALUES ('Paquete Platinum, hasta 500m²', 'PFDAH60', '5999.00', '20-10-2022', '10:10 A.M.', '//carpeta');


-- Agregar Pedidos

INSERT INTO pedidos(productos_idProducto, usuarios_idusuarios, costoTotal, resumenPedido) VALUES ('1', '1', '16.50', 'Esponja para trastes');
INSERT INTO pedidos(productos_idProducto, usuarios_idusuarios, costoTotal, resumenPedido) VALUES ('1', '2', '26.50', 'Cloro');
INSERT INTO pedidos(productos_idProducto, usuarios_idusuarios, costoTotal, resumenPedido) VALUES ('1', '3', '36.50', 'Jabon');
INSERT INTO pedidos(productos_idProducto, usuarios_idusuarios, costoTotal, resumenPedido) VALUES ('1', '2', '22.50', 'Trapeador');
INSERT INTO pedidos(productos_idProducto, usuarios_idusuarios, costoTotal, resumenPedido) VALUES ('1', '1', '10.50', 'Escoba');


-- Agregar Pedidos de Servicios

INSERT INTO pedidosservicios(resumenPedido, costoTotal, servicios_idservicios, usuarios_idusuarios) VALUES ('Paquete Basic', '1490.00', '1', '1');
INSERT INTO pedidosservicios(resumenPedido, costoTotal, servicios_idservicios, usuarios_idusuarios) VALUES ('Paquete 1', '2490.00', '1', '1');
INSERT INTO pedidosservicios(resumenPedido, costoTotal, servicios_idservicios, usuarios_idusuarios) VALUES ('Paquete 2', '3490.00', '1', '1');
INSERT INTO pedidosservicios(resumenPedido, costoTotal, servicios_idservicios, usuarios_idusuarios) VALUES ('Paquete 3', '4490.00', '1', '1');
INSERT INTO pedidosservicios(resumenPedido, costoTotal, servicios_idservicios, usuarios_idusuarios) VALUES ('Paquete 4', '5490.00', '1', '1');


