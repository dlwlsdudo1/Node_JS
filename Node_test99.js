var express = require('express');  //node express 를 import 하겠다.  이름은 express 로 한다.  
var app = express.Router();   // express 에서 Router 라는 함수를 만들겠다.  그것을 app 으로 지정 쓸려면 app 으로
var db = require('./DB');   // ./ : 같은 경로 .. DB 파일에서 에서 뽑아오는데 그것을 db로 지정하겠다.

app.use(express.static('public'));
app.use(express.static('files'));

app.get('/', function (req, res) {
  db.query(`SELECT * FROM notice`, (err, rows, fields) => { //query (`SQL 문법`, ...)
    if (err) {
      console.log("error: ", err);
      //result(err, null);
      return;
    }
    console.log("customers: ", rows);
    res.send(rows);
  });
});

app.post('/', function (req, res) { 
  res.send('Got a POST request');
});

app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user');
});

app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user');
});
app.use('/static', express.static('public'));
module.exports = app;
