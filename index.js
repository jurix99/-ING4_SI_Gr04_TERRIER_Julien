const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
res.sendFile('readme.md');
})

app.get('/users/:id', function(req, res) {
  let response = { "page": "users", "parameters": req.params };
  res.send(JSON.stringify(response));
  });

app.post('/', function (req, res) {
  res.send('POST request to the homepage');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})