-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 18-Fev-2021 às 01:40
-- Versão do servidor: 10.4.11-MariaDB
-- versão do PHP: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `bd_ifestas`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `nivelacesso`
--

CREATE TABLE `nivelacesso` (
  `admin` int(11) NOT NULL,
  `colaborador` int(11) NOT NULL,
  `cliente` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `nivelacesso`
--

INSERT INTO `nivelacesso` (`admin`, `colaborador`, `cliente`) VALUES
(1, 2, 3);

-- --------------------------------------------------------

--
-- Estrutura da tabela `pedido`
--

CREATE TABLE `pedido` (
  `idPedido` int(11) NOT NULL,
  `idProduto` int(11) NOT NULL,
  `idUsuario` int(11) NOT NULL,
  `nivelAcesso` int(11) NOT NULL,
  `descricaoPedido` int(11) NOT NULL,
  `dataEntrega` int(11) NOT NULL,
  `rua` int(11) NOT NULL,
  `numero` int(11) NOT NULL,
  `bairro` int(11) NOT NULL,
  `cidade` int(11) NOT NULL,
  `valor` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura da tabela `produto`
--

CREATE TABLE `produto` (
  `idProduto` int(11) NOT NULL,
  `nomeProduto` varchar(100) DEFAULT NULL,
  `valor` float(10,2) NOT NULL,
  `descricao` varchar(300) DEFAULT NULL,
  `imagem1` varchar(50) DEFAULT NULL,
  `imagem2` varchar(50) DEFAULT NULL,
  `imagem3` varchar(50) DEFAULT NULL,
  `idUsuario` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `produto`
--

INSERT INTO `produto` (`idProduto`, `nomeProduto`, `valor`, `descricao`, `imagem1`, `imagem2`, `imagem3`, `idUsuario`) VALUES
(2, 'Bolo ', 100.00, 'Bolo recheado de chocolate ', 'undefined', 'undefined', 'undefined', 33),
(5, 'Banco de dados', 10.00, 'Exemplo', 'C:fakepathBanco_de_dados_10.png', 'undefined', 'undefined', 33),
(6, 'Bolo', 80.00, 'Bolo de Laranja', 'undefined', 'undefined', 'undefined', 33);

-- --------------------------------------------------------

--
-- Estrutura da tabela `reserva`
--

CREATE TABLE `reserva` (
  `idReserva` int(11) NOT NULL,
  `idProduto` int(11) NOT NULL,
  `dataEntrega` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuario`
--

CREATE TABLE `usuario` (
  `idUsuario` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `cpf` varchar(20) NOT NULL,
  `nascimento` varchar(10) NOT NULL,
  `celular` varchar(20) NOT NULL,
  `rua` varchar(30) NOT NULL,
  `numero` varchar(20) NOT NULL,
  `cep` varchar(15) NOT NULL,
  `bairro` varchar(15) NOT NULL,
  `cidade` varchar(15) NOT NULL,
  `email` varchar(50) NOT NULL,
  `senha` varchar(10) NOT NULL,
  `nivelAcesso` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `usuario`
--

INSERT INTO `usuario` (`idUsuario`, `nome`, `cpf`, `nascimento`, `celular`, `rua`, `numero`, `cep`, `bairro`, `cidade`, `email`, `senha`, `nivelAcesso`) VALUES
(2, 'Sasuke Uchiha', '12345678910', '23/08/1990', '912345678', 'rua b', '123', '26.010-422', 'Parque Rosário', 'Nova Iguaçu', 'sasuke@email.com', '123', 3),
(19, 'Patricia Querino De Meireles Silva', '12312312312', '1989-12-25', '21912345678', 'Rua a', '363', '26123123', 'Areia Branca', 'Belford Roxo', 'patricia@email.com', '123456', 2),
(32, 'Elizabeth Cassia ', '14545446546', '1968-02-14', '21912345678', 'Rua a', '363', '26135035', 'Areia Branca', 'Belford Roxo', 'beth@email.com', '123456', 2),
(33, 'Cristian Daniel ', '12345678910', '23/08/1990', '912345678', 'rua a', '363', '26.135.040', 'Areia Branca', 'Belford Roxo', 'cristian@email.com', '123', 2);

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `pedido`
--
ALTER TABLE `pedido`
  ADD PRIMARY KEY (`idPedido`),
  ADD KEY `fk_pedido_idProduto` (`idProduto`),
  ADD KEY `fk_pedido_idUsuario` (`idUsuario`);

--
-- Índices para tabela `produto`
--
ALTER TABLE `produto`
  ADD PRIMARY KEY (`idProduto`),
  ADD KEY `fk_idUsuario` (`idUsuario`);

--
-- Índices para tabela `reserva`
--
ALTER TABLE `reserva`
  ADD PRIMARY KEY (`idReserva`),
  ADD KEY `fk_reserva_idProduto` (`idProduto`);

--
-- Índices para tabela `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`idUsuario`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `pedido`
--
ALTER TABLE `pedido`
  MODIFY `idPedido` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `produto`
--
ALTER TABLE `produto`
  MODIFY `idProduto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de tabela `reserva`
--
ALTER TABLE `reserva`
  MODIFY `idReserva` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `usuario`
--
ALTER TABLE `usuario`
  MODIFY `idUsuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `pedido`
--
ALTER TABLE `pedido`
  ADD CONSTRAINT `fk_pedido_idProduto` FOREIGN KEY (`idProduto`) REFERENCES `produto` (`idProduto`),
  ADD CONSTRAINT `fk_pedido_idUsuario` FOREIGN KEY (`idUsuario`) REFERENCES `usuario` (`idUsuario`);

--
-- Limitadores para a tabela `produto`
--
ALTER TABLE `produto`
  ADD CONSTRAINT `produto_ibfk_1` FOREIGN KEY (`idUsuario`) REFERENCES `usuario` (`idUsuario`) ON DELETE CASCADE;

--
-- Limitadores para a tabela `reserva`
--
ALTER TABLE `reserva`
  ADD CONSTRAINT `fk_reserva_idProduto` FOREIGN KEY (`idProduto`) REFERENCES `produto` (`idProduto`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
