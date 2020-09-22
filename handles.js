const db = require('./db');
const error = require('./page404');

module.exports = function(app){
  app.get('/', (req, res) => {
    html = [
      `<h1>TP1</h1>`,
      '<ul>',
      `<li><a href="/hello/${db.users[0].name}">${db.users[0].name}</a></li>`,
      `<li><a href="/hello/${db.users[1].name}">${db.users[1].name}</a></li>`,
      `<li><a href="/hello/${db.users[2].name}">${db.users[2].name}</a></li>`,
      `<li><a href="/hello">Guest</a></li>`,
      '</ul>',
    ].join('')
    
    res.send(html)
  })
  app.get('/hello', function(req, res) {
    html = [
      `<h1>guest</h1>`,
    ].join('')
    
    res.send(html)
  })
  app.get('/hello/:name', function(req, res) {
    if(req.params.name!="Julien"){
    html = [
      `<h1>You are connected as ${req.params.name}</h1>`,
    ].join('')
    
    res.send(html)
  }
  else{
    html = [
      '<h1>Hello, i m julien, i m 20 years old and i like coding with node</h1>',
    ].join('')
    
    res.send(html)
    
  }
  })
  
  app.get('*', function(req, res, next) {
    let err = new Error('Page Not Found');
    err.statusCode = 404;
    next(err);
    res.send([error.content].join(''))
    
  });
  }