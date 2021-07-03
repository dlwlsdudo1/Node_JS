const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
  console.log('hello');
})

app.post('/dd', (req, res) => {
    res.send('~!')
    console.log('hello');
  })

var url = require('url');

var parsedURL = url.parse('http://www.google.co.kr')

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})