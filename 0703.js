/*app.get('/notice', (req, res) => {
  res.send('Hello World!')
  console.log('hello');
})

app.post('/notices', (req, res) => {
    res.send('~!')
    console.log('hello');
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})*/


const express = require('express')
const app = express()
const port = 3308 // db port 

var mysql = require('mysql');

/*var app = express();
http.createServer(app).listen(3306, function(){
  console.log('Server running at http://127.0.0.1:3306');
});*/

var con = mysql.createConnection({
  host: "db",
  user: "name",
  password: "password",
  database : 'database'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

con.query('select * from ...', (error, results, fields)=> {
  if (error) {
      console.log(error);
  }
  console.log(results);
});

con.end();

//('insert into ... (a, b, c) VALUES ("Test", "Test1", "Test2")'
