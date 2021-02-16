//linguagem express
var express = require('express');
var bodyParser = require('body-parser');
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
/* método inserir (precisa alterar)
app.post('/aluno', (req, res) => {
	var nome = req.body.nome;
    var disciplina = req.body.disciplina;
    var nota1 = req.body.nota1;
    var nota2 = req.body.nota2;
execSqlQuery(`insert into aluno (nome, disciplina, nota1, nota2)
  values ('${nome}','${disciplina}','${nota1}','${nota2}')`, res);
});*/

// método selecionar todos os usuários
app.get('/logar', (req, res) => {
	execSqlQuery(`select * from usuario `, res);
});

// método logar  buscando por email do cliente...
app.post('/logar', (req, res) => {
	let email = req.body.email;;
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

/*método de atualizar (precisa alterar)
app.put('/aluno/:codigo', (req, res) => {
    var codigo= parseInt(req.params.codigo); 
    var nome = req.body.nome;
    var disciplina = req.body.disciplina;
    var nota1 = req.body.nota1;
    var nota2 = req.body.nota2;
execSqlQuery(`update aluno set nome='${nome}', 
  disciplina='${disciplina}',nota1='${nota1}',nota2='${nota2}'
    where codigo=${+codigo}` , res);
});*/


var server = app.listen(3007, 'localhost', function () {
	var host = server.address().address;
	var port = server.address().port;
    console.log('Listening at http://%s:%s', host, port);
    
   console.log("Ifesta esta na porta 3007");


});
