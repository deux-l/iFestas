//linguagem express
var express = require('express');
var bodyParser = require('body-parser');
const multipart = require('connect-multiparty');
var app = express();

// saída (json)
//client mysql
const mysql = require('mysql');
const e = require('express');
//tudo será json
app.use(bodyParser.json());

//cors origns (permissao para acessar  ) 
app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header("Access-Control-Allow-Credentials", "true");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers','X-Requested-With, Content-Type, X-Codingpedia,Authorization');
	next();
}); 

function execSqlQuery(sqlQry, res) {
	const connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		port: '3306',
		password: '',
		database: 'bd_ifestas'
	})
	connection.query(sqlQry, function (error, results, fields) {
		if (error) {
			res.json(error);
		} else {
			res.json(results);
		}
		connection.end();
		console.log('Executou ...');
	})
}
// método inserir usuario
app.post('/usuario', (req, res) => {
	var nome = req.body.nome;
	var cpf = req.body.cpf;
    var nascimento = req.body.nascimento;
    var celular = req.body.celular;
	var rua = req.body.rua;
	var numero = req.body.numero;
	var cep = req.body.cep;
	var bairro = req.body.bairro;
	var cidade = req.body.cidade;
	var email = req.body.email;
	var senha = req.body.senha;
	var nivelAcesso = req.body.nivelAcesso;
execSqlQuery(`insert into usuario (nome, cpf, nascimento, celular, rua, numero, cep, bairro, cidade, email, senha, nivelAcesso)
  values ('${nome}','${cpf}','${nascimento}','${celular}','${rua}','${numero}',
  '${cep}','${bairro}','${cidade}','${email}','${senha}','${nivelAcesso}')`, res);
});

// método inserir produto
/*app.post('/produto', (req, res) => {
	var nomeProduto = req.body.nomeProduto;
	var valor = req.body.valor;
	var descricao = req.body.descricao;
    var imagem1 = req.body.imagem1;
    var imagem2 = req.body.imagem2;
	var imagem3 = req.body.imagem3;
	var idUsuario = req.body.idUsuario;
execSqlQuery(`insert into produto (nomeProduto, valor, descricao, imagem1, imagem2, imagem3, idUsuario)
  values ('${nomeProduto}','${valor}','${descricao}','${imagem1}','${imagem2}','${imagem3}','${idUsuario}')`, res);
});*/

const multipartMiddleware = multipart({ uploadDir: 'C:/Users/crist/projetoangular/projetoifestas/frontend/src/assets/imagens' });
app.post('/produto', multipartMiddleware, (req, res) => {	
  const files = req.files;
  var nomeProduto = 'Bolo';
  var valor = 34.99;
  var descricao = 'Bolo de laranja';
  var imagem1 = files['file'][0]['path'];
  var imagem2 = files['file'][1]['path'];;
  var imagem3 = files['file'][2]['path'];
  var idUsuario = 33;
  //const item = files.file[0]['path']
  const item = files

  //var resultado = imagem1.replace(//g, " ");
  var er = /[""\\]/gi
  imagem1 = imagem1.replace(er, "")	
  imagem1 = imagem1.replace(/C:Userscristprojetoangularprojetoifestasfrontendsrcassetsimagens/g,"")
  imagem1 = `assets\\\\imagens\\\\${imagem1}`

  //var er = /[""\\]/gi
  imagem2 = imagem2.replace(er, "")	
  imagem2 = imagem2.replace(/C:Userscristprojetoangularprojetoifestasfrontendsrcassetsimagens/g,"")
  imagem2 = `assets\\\\imagens\\\\${imagem2}`
  
  //var er = /[""\\]/gi
  imagem3 = imagem3.replace(er, "")	
  imagem3 = imagem3.replace(/C:Userscristprojetoangularprojetoifestasfrontendsrcassetsimagens/g,"")
  imagem3 = `assets\\\\imagens\\\\${imagem3}`

  //res.json({ message: files });
  //var imagem1 = files['file']['path'];
  console.log(imagem1);
  console.log(imagem2);
  console.log(imagem3);
  execSqlQuery(`insert into produto (nomeProduto, valor, descricao, imagem1, imagem2, imagem3, idUsuario)
  values ('${nomeProduto}','${valor}','${descricao}','${imagem1}','${imagem2}','${imagem3}','${idUsuario}')`, res);
});


// método selecionar todos os usuários
app.get('/usuario', (req, res) => {
	execSqlQuery(`select * from usuario `, res);
});

// método selecionar todos os produtos por id do usuário
app.get('/produto/:idUsuario', (req, res) => {
	var idUsuario = req.params.idUsuario;
	execSqlQuery(`select * from produto where idUsuario='${idUsuario}'`, res);
});

// método logar  buscando por email do cliente...
app.post('/logar', (req, res) => {
	var email = req.body.email;;
	//let senha = req.body.senha;
execSqlQuery(`select * from usuario where email='${email}'`, res);
});

// método buscar por email
app.get('/logar/:email', (req, res) => {
    var email = req.params.email;
    execSqlQuery(`select * from usuario where email='${email}'`, res);
});
/*método de apagar ... (precisa alterar)
app.delete('/aluno/:codigo', (req, res) => {
    var codigo = parseInt(req.params.codigo);
	execSqlQuery(`delete from aluno where codigo=` + codigo, res);
});*/

//método de atualizar 
app.put('/logar/:email', (req, res) => {
    var idUsuario = parseInt(req.body.idUsuario); 
    var nome = req.body.nome;
    var nascimento = req.body.nascimento;
    var celular = req.body.celular;
	var rua = req.body.rua;
	var numero = req.body.numero;
	var cep = req.body.cep;
	var bairro = req.body.bairro;
	var cidade = req.body.cidade;
	var email = req.params.email;
	var senha = req.body.senha;
execSqlQuery(`update usuario set nome='${nome}', nascimento='${nascimento}', celular='${celular}', rua='${rua}',
			  	numero='${numero}', cep='${cep}', bairro='${bairro}', cidade='${cidade}', email='${email}', senha='${senha}'
    where idUsuario=${+idUsuario}` , res);
});


var server = app.listen(3007, 'localhost', function () {
	var host = server.address().address;
	var port = server.address().port;
    console.log('Listening at http://%s:%s', host, port);
    
   console.log("Ifesta esta na porta 3007");


});
