var http = require('http');
var mysql = require('mysql');

var connection =mysql.createConnection({
  host : 'localhost',
  user : 'root',
  database : 'blog'
});
connection.connect();

http.createServer(function (req, res){
  //おまじない
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Request-Method', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
  res.setHeader('Access-Control-Allow-Headers', '*');
  //ここから下が重要
  res.writeHead(200, {'Content-Type': 'application/json'});
  //追加文
  connection.query('SELECT * FROM `nikki`', function (error, results, fields){
    console.log(results);
    res.end(JSON.stringify(results));
  });
}).listen(1337, '127.0.0.1');
