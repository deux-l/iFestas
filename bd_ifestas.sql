-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 03-Mar-2021 às 23:36
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
  `imagem` varchar(100) NOT NULL,
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
  `idFornecedor` int(11) NOT NULL,
  `nomeVendedor` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `pedido`
--

INSERT INTO `pedido` (`idPedido`, `idProduto`, `idUsuario`, `nomeUsuario`, `nomeProduto`, `imagem`, `tipoNegocio`, `descricao`, `nivelAcesso`, `dataEntrega`, `dataDevolucao`, `email`, `rua`, `numero`, `bairro`, `cidade`, `celular`, `valor`, `tipoCartao`, `nomeCartao`, `numeroCartao`, `validade`, `codigoSeguranca`, `idFornecedor`, `nomeVendedor`) VALUES
(31, 52, 33, 'Cristian Daniel ', 'Pula Pula', '', 'aluguel', 'Alugo pula pula de tamanho média\nR$ 50,00 a diária', 2, '2021-02-28', '2021-03-01', 'cristian@email.com', 'rua a', 363, 'Areia Branca', 'Belford Roxo', '912345678', 47.50, 'credito', 'cristian daniel', '1234567891011213', '0522', 123, 33, ''),
(32, 47, 33, 'Cristian Daniel ', 'Bolo de chocolate', '', 'venda', 'Bolo de chocolate com recheio de coco e granulados de chocolate\ngrande', 2, '2021-02-27T21:01:05.', '2021-02-27T21:01:05.', 'cristian@email.com', 'rua a', 363, 'Areia Branca', 'Belford Roxo', '912345678', 79.28, 'debito', 'cristian daniel', '1213456678910111', '0522', 123, 33, ''),
(34, 52, 33, 'Cristian Daniel ', 'Pula Pula', '', 'aluguel', 'Alugo pula pula de tamanho média\nR$ 50,00 a diária', 2, '2021-03-03', '2021-03-04', 'cristian@email.com', 'rua a', 363, 'Areia Branca', 'Belford Roxo', '912345678', 47.50, 'credito', 'cristian daniel', '1234567891011121', '0222', 123, 33, ''),
(35, 55, 33, 'Cristian Daniel ', 'Máquina de algodão doce', '', 'aluguel', 'Alugo máquina de algodão doce\nR$ 40,00 a diária ', 2, '2021-03-03', '2021-03-07', 'cristian@email.com', 'rua a', 363, 'Areia Branca', 'Belford Roxo', '912345678', 38.00, 'debito', 'cristian daniel', '1234567891233448', '2522', 123, 33, ''),
(36, 52, 33, 'Cristian Daniel ', 'Pula Pula', '', 'aluguel', 'Alugo pula pula de tamanho média\nR$ 50,00 a diária', 2, '2021-03-05', '2021-03-08', 'cristian@email.com', 'rua a', 363, 'Areia Branca', 'Belford Roxo', '912345678', 47.50, 'credito', 'cristian daniel', '1234564898961132', '0222', 123, 33, ''),
(37, 52, 33, 'Cristian Daniel ', 'Pula Pula', '', 'aluguel', 'Alugo pula pula de tamanho média\nR$ 50,00 a diária', 2, '2021-03-10', '2021-03-13', 'cristian@email.com', 'rua a', 363, 'Areia Branca', 'Belford Roxo', '912345678', 47.50, 'credito', 'cristian daniel', '1211564654564564', '0522', 123, 33, ''),
(38, 52, 2, 'Sasuke Uchiha', 'Pula Pula', '', 'aluguel', 'Alugo pula pula de tamanho média\nR$ 50,00 a diária', 3, '2021-03-28', '2021-04-05', 'sasuke@email.com', 'rua b', 123, 'Parque Rosário', 'Nova Iguaçu', '912345678', 50.00, 'credito', 'sasuke uchiha', '1616514654564654', '0522', 123, 33, ''),
(43, 46, 33, 'Cristian Daniel ', 'Bolo de chocolate', '', 'venda', 'Bolo de chocolate com recheio de coco médio ', 2, '2021-03-01T21:24:39.', '2021-03-01T21:24:39.', 'cristian@email.com', 'rua a', 363, 'Areia Branca', 'Belford Roxo', '912345678', 42.75, 'credito', 'cristian daniel', '2151536516516516', '0530', 123, 33, 'Cristian Daniel '),
(49, 54, 33, 'Cristian Daniel ', 'Batedeira Arno', 'assets\\imagens\\PrBf4l4LQm65agnr4h9W4ar9.jpg', 'venda', 'Batedeira planetaria arno\n8 velocidades', 2, '2021-03-01T21:39:56.', '2021-03-01T21:39:56.', 'cristian@email.com', 'rua a', 363, 'Areia Branca', 'Belford Roxo', '912345678', 237.50, 'credito', 'cristian daniel', '1321355465465465', '0532', 123, 33, 'Cristian Daniel '),
(50, 46, 33, 'Cristian Daniel ', 'Bolo de chocolate', 'assets\\imagens\\vNRXNieOWkYbDd6PmG8t33lF.jpg', 'venda', 'Bolo de chocolate com recheio de coco médio ', 2, '2021-03-01T21:40:41.', '2021-03-01T21:40:41.', 'cristian@email.com', 'rua a', 363, 'Areia Branca', 'Belford Roxo', '912345678', 42.75, 'credito', 'cristian daniel', '3214165465465465', '0534', 123, 33, 'Cristian Daniel '),
(51, 52, 33, 'Cristian Daniel ', 'Pula Pula', 'assets\\imagens\\DbKwBGcRFcE45DUxAbybcVxY.jpg', 'aluguel', 'Alugo pula pula de tamanho média\nR$ 50,00 a diária', 2, '2021-08-22', '2021-08-23', 'cristian@email.com', 'rua a', 363, 'Areia Branca', 'Belford Roxo', '912345678', 47.50, 'credito', 'cristian daniel ', '7897987987989879', '0540', 123, 33, 'Cristian Daniel '),
(52, 55, 2, 'Sasuke Uchiha', 'Máquina de algodão doce', 'assets\\imagens\\cuHMquFgRL9uTx5rnE4loJ1B.jpg', 'aluguel', 'Alugo máquina de algodão doce\nR$ 40,00 a diária ', 3, '2021-12-24', '2021-12-25', 'sasuke@email.com', 'rua b', 123, 'Parque Rosário', 'Nova Iguaçu', '912345678', 40.00, 'credito', 'cristian daniel', '2132132132132132', '0545', 123, 33, 'Cristian Daniel ');

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
(55, 'Máquina de algodão doce', 40.00, 'Alugo máquina de algodão doce\nR$ 40,00 a diária ', 'equipamentos', 'aluguel', 'assets\\imagens\\cuHMquFgRL9uTx5rnE4loJ1B.jpg', 'assets\\imagens\\vt569Yys5J1i8BkQpD3PKjiT.jpg', 'assets\\imagens\\LhfPC6HegKrtY6Cz6eroGqqm.jpg', 33),
(56, 'Bolo de festa 30 cm', 70.00, 'Bolo de festa com temas variados, qualquer idade 30 cm', 'comidas', 'venda', 'assets\\imagens\\2F3DK2x9EFw7m2utQ5dgyk7w.jpeg', 'assets\\imagens\\YUdmHE-e8FyGOtz4v0bt9FJy.jpg', 'assets\\imagens\\5MzXIsPSwx9ymTn0G6GgK6JB.jpg', 35),
(57, 'Salgados fritos cento', 50.00, 'Salgados fritos a sua escolha ou variados (coxinha, quibe, risole, bolinha de queijo, salsicha, queijo com presunto) ', 'comidas', 'venda', 'assets\\imagens\\XjrpSNs5d-aJxoEoa1wRIqcS.jpg', 'assets\\imagens\\ngX8XCSX9Tv8aBIgKveQP-Z0.jpg', 'assets\\imagens\\GObdW8eKad9HQBMDlCFKYtRf.jpg', 35),
(58, 'Salgados assados cento', 65.00, 'Salgados assados valor por cento. Temos empadinhas, quiches, quibes, mini joelhos, mini hambúrgueres, folheados)', 'comidas', 'venda', 'assets\\imagens\\CwaoK5XDfurhUliMvL7_YIFm.jpg', 'assets\\imagens\\YFTrwrBOLcMjlnnhF6hyAafo.jpg', 'assets\\imagens\\ybmf27dRFWouQyObuOyKtBve.png', 37),
(59, 'Barraca de batata para festas', 100.00, 'Preparo batatas fritas para sua festa! Valor para até 5 horas de festa', 'servicos', 'aluguel', 'assets\\imagens\\WaoDk84wW0GaktQVNbNHvyri.jpg', 'assets\\imagens\\CwAJVgGP32VcWCuZ9vqTNjz_.jpg', 'assets\\imagens\\tHmdmio7FAuzp7Fj1SQ9Q5Re.jpg', 37),
(60, 'Mini pizzas 50', 30.00, '50 unidades de mini pizzas congeladas ou frescas', 'comidas', 'venda', 'assets\\imagens\\hJ7kM_nTqe9gCfnmKAiX2GH1.jpg', 'assets\\imagens\\KG_rSxDZwY3ywaioyLjoff9d.png', 'assets\\imagens\\f1Bf19QhuIQpplerTCTp49oT.jpg', 37),
(61, 'Docinho gourmet 50', 30.00, '50 unidades de docinhos gourmet de variados sabores', 'comidas', 'venda', 'assets\\imagens\\GGKn_vmu3p4lCU2TQfuBo87F.png', 'assets\\imagens\\rZJSZKqMlMVn8STLiE6aCvei.jpg', 'assets\\imagens\\ZjaAaY-FDtYxlRNKMSN1K0zT.png', 35),
(62, 'Docinhos cento', 60.00, '100 unidades de docinhos para festa de sabores variados a combinar (brigadeiro, brigadeiro rosa, beijinho, chocolate branco, cajuzinho)', 'comidas', 'venda', 'assets\\imagens\\tulhkX8rwFQkNo822-6Llb63.png', 'assets\\imagens\\VDZzTpC7-vE8BSk_kEATO4iK.jpg', 'assets\\imagens\\H67DoDnGcV2-EtqW2BO2fD0K.jpg', 35),
(63, 'Trufas', 40.00, '50 unidades de trufas recheadas com brigadeiro, beijinho, mousse maracujá, mousse morango, mousse limão, doce de leite)', 'comidas', 'venda', 'assets\\imagens\\kpQFhWjczC3r8zLqG3MN6Hle.jpg', 'assets\\imagens\\-qYK_yRdkbVJOpqRO-xRbalj.jpg', 'assets\\imagens\\w9H7WGH9Q2VRcfnEMB39v9Cg.jpg', 35),
(64, 'Brigadeiro de colher cento', 50.00, 'Brigadeiro de copo 100 unidades. Sabores disponíveis:\nBrigadeiro; Beijinho; Morango; ', 'comidas', 'venda', 'assets\\imagens\\FxNkwQONlYmx53vKWqHUsvxn.jpg', 'assets\\imagens\\2wcZ9bM3Gk-Z1Rp4tnJstOd_.jpg', 'assets\\imagens\\_nrDcLRWU_iF2sVaCJynn6jM.jpg', 37),
(65, 'Pirulitos de chocolate simples', 35.00, 'Pirulitos de chocolate com decorações simples 30 unidades', 'comidas', 'venda', 'assets\\imagens\\jKzb04VzMNIxjKc5vS5CQ1DA.jpg', 'assets\\imagens\\cj4eCMU5CHz-B977BOjZa0Xb.jpg', 'assets\\imagens\\Rgp6dZxUBHaZIJRQq0zJPPyW.jpg', 37),
(66, 'Buffet casamento básico', 1000.00, 'Buffet casamento para até 50 convidados', 'servicos', 'venda', 'assets\\imagens\\yR0qCLhOW9pRnX2jfrCZSVxM.jpg', 'assets\\imagens\\CukLcbndk6g07vS_aa_xDSY1.jpg', 'assets\\imagens\\lPsJ1nNZszps7Fp-crucfsIH.jpg', 36),
(67, 'Buffet casamento médio', 2000.00, 'Buffet casamento para até 100 pessoas', 'servicos', 'venda', 'assets\\imagens\\S7wU0BuCWWlYMJZ-VFklQp1a.jpg', 'assets\\imagens\\avUSl6fDHccFLbwbt1EQM3tG.jpg', 'assets\\imagens\\OcF1lkfyyN3xUs6zzPE7Z2Al.jpg', 36);

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
(33, 'Cristian Daniel ', '12345678910', '23/08/1990', '912345678', 'rua a', '363', '26.135.040', 'Areia Branca', 'Belford Roxo', 'cristian@email.com', '123', 2),
(35, 'Daniele Andrade', '88727787887', '11091998', '21397463611', 'Estrada do colegio', '25', '26015000', 'Centro', 'Nova Iguaçu', 'dani@email.com', '123456', 2),
(36, 'Carlos Eduardo', '12345678910', '10051970', '21548748585', 'Rua dos carecas', '24', '15545145', 'Fumantes', 'Queimados', 'carlos@email.com', '123456', 2),
(37, 'Pedro Gomes', '25252525511', '03041990', '21784947984', 'Rua abcde', '104', '15151511', 'Helio', 'Mesquita', 'pedro@email.com', '123456', 2);

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
  MODIFY `idPedido` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT de tabela `produto`
--
ALTER TABLE `produto`
  MODIFY `idProduto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=68;

--
-- AUTO_INCREMENT de tabela `reserva`
--
ALTER TABLE `reserva`
  MODIFY `idReserva` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de tabela `usuario`
--
ALTER TABLE `usuario`
  MODIFY `idUsuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

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
