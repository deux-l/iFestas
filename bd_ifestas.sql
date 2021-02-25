-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 25-Fev-2021 às 22:50
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
-- Estrutura da tabela `avaliacoes`
--

CREATE TABLE `avaliacoes` (
  `idAvaliacao` int(11) NOT NULL,
  `idUsuario` int(11) NOT NULL,
  `idProduto` int(11) DEFAULT NULL,
  `nomeUsuario` varchar(50) NOT NULL,
  `avaliacao` varchar(50) NOT NULL,
  `nota` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `avaliacoes`
--

INSERT INTO `avaliacoes` (`idAvaliacao`, `idUsuario`, `idProduto`, `nomeUsuario`, `avaliacao`, `nota`) VALUES
(7, 33, 46, 'Cristian Daniel ', 'Muito ruim', 2);

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
  `nomeUsuario` varchar(50) NOT NULL,
  `nomeProduto` varchar(50) NOT NULL,
  `tipoNegocio` varchar(30) NOT NULL,
  `descricao` varchar(300) NOT NULL,
  `nivelAcesso` int(11) NOT NULL,
  `dataEntrega` varchar(20) NOT NULL,
  `dataDevolucao` varchar(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  `rua` varchar(30) NOT NULL,
  `numero` int(11) NOT NULL,
  `bairro` varchar(30) NOT NULL,
  `cidade` varchar(30) NOT NULL,
  `celular` varchar(30) NOT NULL,
  `valor` float(10,2) NOT NULL,
  `tipoCartao` varchar(20) NOT NULL,
  `nomeCartao` varchar(30) NOT NULL,
  `numeroCartao` varchar(30) NOT NULL,
  `validade` varchar(15) NOT NULL,
  `codigoSeguranca` int(3) NOT NULL,
  `idFornecedor` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `pedido`
--

INSERT INTO `pedido` (`idPedido`, `idProduto`, `idUsuario`, `nomeUsuario`, `nomeProduto`, `tipoNegocio`, `descricao`, `nivelAcesso`, `dataEntrega`, `dataDevolucao`, `email`, `rua`, `numero`, `bairro`, `cidade`, `celular`, `valor`, `tipoCartao`, `nomeCartao`, `numeroCartao`, `validade`, `codigoSeguranca`, `idFornecedor`) VALUES
(5, 44, 33, 'Cristian Daniel ', 'Bolo', 'venda', 'Bolo de laranja', 2, 'undefined', 'undefined', 'cristian@email.com', '0', 363, '0', '0', '912345678', 34.99, 'credito', 'cnjcnj', '3,23,', '543', 123, 0),
(17, 46, 33, 'Cristian Daniel ', 'Bolo ', 'aluguel', 'Bolo de coco', 2, '2021-02-22', '2021-02-23', 'cristian@email.com', '0', 363, '0', '0', '912345678', 39.00, 'credito', 'dffdhdh', '35434', '31', 13, 0),
(18, 47, 33, 'Cristian Daniel ', 'Bolo de chocolate', '', 'Bolo de chocolate com recheio de coco', 2, '2021-02-23T03:55:42.', '2021-02-23T03:55:42.', 'cristian@email.com', '0', 363, '0', '0', '912345678', 39.00, 'credito', 'hfddf', '1', '21', 2121, 0),
(19, 47, 33, 'Cristian Daniel ', 'Bolo de chocolate', '', 'Bolo de chocolate com recheio de coco', 2, '2021-02-23T03:57:40.', '2021-02-23T03:57:40.', 'cristian@email.com', '0', 363, '0', '0', '912345678', 39.00, 'tipoCartao', 'gjjgj', '51465', '5214', 5641, 0),
(20, 46, 33, 'Cristian Daniel ', 'Bolo ', 'aluguel', 'Bolo de coco', 2, '2021-02-24', '2021-02-25', 'cristian@email.com', '0', 363, '0', '0', '912345678', 39.00, 'credito', 'ghghfsd', '333', '3131', 1331, 0),
(21, 46, 33, 'Cristian Daniel ', 'Bolo ', 'aluguel', 'Bolo de coco', 2, '2021-02-23T23:39:54.', '2021-02-23T23:39:54.', 'cristian@email.com', '0', 363, '0', '0', '912345678', 39.00, 'credito', 'cristian daniel', '1165655', '05/20', 123, 33),
(22, 47, 2, 'Sasuke Uchiha', 'Bolo de chocolate', 'venda', 'Bolo de chocolate com recheio de coco', 3, '2021-02-23T23:40:52.', '2021-02-23T23:40:52.', 'sasuke@email.com', '0', 123, '0', '0', '912345678', 33.45, 'credito', 'sasuke uchiha', '3,54353', '05/22', 123, 33),
(23, 46, 33, 'Cristian Daniel ', 'Bolo ', 'aluguel', 'Bolo de coco', 2, '2021-02-24T02:29:17.', '2021-02-24T02:29:17.', 'cristian@email.com', 'rua a', 363, 'Areia Branca', 'Belford Roxo', '912345678', 39.00, 'credito', 'cristian daniel', '25156465', '05/02', 123, 33),
(24, 47, 33, 'Cristian Daniel ', 'Bolo de chocolate', '', 'Bolo de chocolate com recheio de coco', 2, '2021-02-24T02:32:22.', '2021-02-24T02:32:22.', 'cristian@email.com', 'rua a', 363, 'Areia Branca', 'Belford Roxo', '912345678', 33.45, 'tipoCartao', 'stark uchiha', '5151', '05/22', 123, 33),
(25, 47, 33, 'Cristian Daniel ', 'Bolo de chocolate', '', 'Bolo de chocolate com recheio de coco', 2, '2021-02-24T02:35:09.', '2021-02-24T02:35:09.', 'cristian@email.com', 'rua a', 363, 'Areia Branca', 'Belford Roxo', '912345678', 31.78, 'debito', 'stark uchiha', '152165', '05/22', 123, 33),
(26, 44, 33, 'Cristian Daniel ', 'Bolo', 'venda', 'Bolo de laranja', 2, '2021-02-24T02:37:21.', '2021-02-24T02:37:21.', 'cristian@email.com', 'rua a', 363, 'Areia Branca', 'Belford Roxo', '912345678', 33.24, 'debito', 'daniel pedreira', '156165', '05/22', 123, 33),
(27, 46, 33, 'Cristian Daniel ', 'Bolo ', 'aluguel', 'Bolo de coco', 2, '2021-02-25', '2021-02-26', 'cristian@email.com', 'rua a', 363, 'Areia Branca', 'Belford Roxo', '912345678', 37.05, 'credito', 'cristian daniel', '11561456', '05/22', 123, 33),
(28, 44, 33, 'Cristian Daniel ', 'Bolo', 'venda', 'Bolo de laranja', 2, '2021-02-24T02:39:33.', '2021-02-24T02:39:33.', 'cristian@email.com', 'rua a', 363, 'Areia Branca', 'Belford Roxo', '912345678', 33.24, 'credito', 'cristian daniel', '651465', '05/23', 123, 33),
(29, 48, 33, 'Cristian Daniel ', 'Bolo ', 'aluguel', 'Bolo de doce de leite', 2, '2021-02-27', '2021-03-01', 'cristian@email.com', 'rua a', 363, 'Areia Branca', 'Belford Roxo', '912345678', 38.00, 'debito', 'daniel cristian', '65541+654', '05/25', 123, 33),
(30, 44, 33, 'Cristian Daniel ', 'Bolo de fubá', 'venda', 'Bolo de fubá com laranja', 2, '2021-02-24T17:13:13.', '2021-02-24T17:13:13.', 'cristian@email.com', 'rua a', 363, 'Areia Branca', 'Belford Roxo', '912345678', 33.24, 'credito', 'cristian daniel', '4156464654654465', '0522', 123, 33);

-- --------------------------------------------------------

--
-- Estrutura da tabela `produto`
--

CREATE TABLE `produto` (
  `idProduto` int(11) NOT NULL,
  `nomeProduto` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `valor` float(10,2) NOT NULL,
  `descricao` varchar(200) CHARACTER SET utf8 DEFAULT NULL,
  `categoria` varchar(30) NOT NULL,
  `tipoNegocio` varchar(30) NOT NULL,
  `imagem1` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `imagem2` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `imagem3` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `idUsuario` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `produto`
--

INSERT INTO `produto` (`idProduto`, `nomeProduto`, `valor`, `descricao`, `categoria`, `tipoNegocio`, `imagem1`, `imagem2`, `imagem3`, `idUsuario`) VALUES
(46, 'Bolo de chocolate', 45.00, 'Bolo de chocolate com recheio de coco médio ', 'comida', 'venda', 'assets\\imagens\\vNRXNieOWkYbDd6PmG8t33lF.jpg', 'assets\\imagens\\XykSZaRnyEoVeKWnM-yQSjjR.jpg', NULL, 33),
(47, 'Bolo de chocolate', 83.45, 'Bolo de chocolate com recheio de coco e granulados de chocolate\ngrande', 'comidas', 'venda', 'assets\\imagens\\inAiXvHBrkxoBIni7fCOPS2Q.jpg', 'assets\\imagens\\VW_UiWKfV420ZljaZOkz0R1G.jpg', 'assets\\imagens\\xTJtU1rSaUj4m88lWj-e9yuV.jpg', 33),
(52, 'Pula Pula', 50.00, 'Alugo pula pula de tamanho média\nR$ 50,00 a diária', 'brinquedos', 'aluguel', 'assets\\imagens\\DbKwBGcRFcE45DUxAbybcVxY.jpg', 'assets\\imagens\\kE4Lx949wjy8dE2AIsSZLjKI.jpg', 'assets\\imagens\\T3gR0EPnBCsOXXmRbCBKvB-S.jpg', 33),
(53, 'Escorrego pequeno', 300.00, 'Vendo escorrego infantil pequeno novo!', 'brinquedos', 'venda', 'assets\\imagens\\5yoE2nPdMVoM2kdPwo4oMC1i.jpg', 'assets\\imagens\\0HAIEhGKP0ve4ls7IPuJtT1C.jpg', 'assets\\imagens\\faFEmwHfGFXQzIMO9dfEClU-.jpg', 33),
(54, 'Batedeira Arno', 250.00, 'Batedeira planetaria arno\n8 velocidades', 'equipamentos', 'venda', 'assets\\imagens\\PrBf4l4LQm65agnr4h9W4ar9.jpg', 'assets\\imagens\\pfYSRovvOkF0TXzd96UNngU1.jpg', 'assets\\imagens\\qmu9Ck4TwQtEUJMJVwgRIR5k.jpg', 33),
(55, 'Máquina de algodão doce', 40.00, 'Alugo máquina de algodão doce\nR$ 40,00 a diária ', 'equipamentos', 'aluguel', 'assets\\imagens\\cuHMquFgRL9uTx5rnE4loJ1B.jpg', 'assets\\imagens\\vt569Yys5J1i8BkQpD3PKjiT.jpg', 'assets\\imagens\\LhfPC6HegKrtY6Cz6eroGqqm.jpg', 33);

-- --------------------------------------------------------

--
-- Estrutura da tabela `reserva`
--

CREATE TABLE `reserva` (
  `idReserva` int(11) NOT NULL,
  `idProduto` int(11) NOT NULL,
  `dataEntrega` varchar(20) NOT NULL,
  `dataDevolucao` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `reserva`
--

INSERT INTO `reserva` (`idReserva`, `idProduto`, `dataEntrega`, `dataDevolucao`) VALUES
(1, 46, '2021-02-22', '2021-02-23'),
(2, 46, '2021-02-22', '2021-02-23'),
(3, 46, '2021-02-22', '2021-02-23'),
(4, 46, '2021-02-22', '2021-02-23'),
(5, 46, '2021-02-22', '2021-02-23'),
(6, 46, '2021-02-22', '2021-02-23'),
(7, 46, '2021-02-22', '2021-02-23'),
(8, 46, '2021-02-22', '2021-02-23');

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
-- Índices para tabela `avaliacoes`
--
ALTER TABLE `avaliacoes`
  ADD PRIMARY KEY (`idAvaliacao`),
  ADD KEY `fk_avaliacoes_idUsuario` (`idUsuario`),
  ADD KEY `fk_avaliacoes_idProduto` (`idProduto`);

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
-- AUTO_INCREMENT de tabela `avaliacoes`
--
ALTER TABLE `avaliacoes`
  MODIFY `idAvaliacao` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de tabela `pedido`
--
ALTER TABLE `pedido`
  MODIFY `idPedido` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT de tabela `produto`
--
ALTER TABLE `produto`
  MODIFY `idProduto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;

--
-- AUTO_INCREMENT de tabela `reserva`
--
ALTER TABLE `reserva`
  MODIFY `idReserva` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de tabela `usuario`
--
ALTER TABLE `usuario`
  MODIFY `idUsuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `avaliacoes`
--
ALTER TABLE `avaliacoes`
  ADD CONSTRAINT `fk_avaliacoes_idProduto` FOREIGN KEY (`idProduto`) REFERENCES `produto` (`idProduto`) ON DELETE CASCADE,
  ADD CONSTRAINT `fk_avaliacoes_idUsuario` FOREIGN KEY (`idUsuario`) REFERENCES `usuario` (`idUsuario`);

--
-- Limitadores para a tabela `pedido`
--
ALTER TABLE `pedido`
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
