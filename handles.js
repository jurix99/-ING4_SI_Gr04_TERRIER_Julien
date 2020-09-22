const error = require('./page404');
const url = require('url');
const qs = require('querystring');

module.exports = {
        serverHandle :function (req, res) {
        const route = url.parse(req.url)
        const path = route.pathname 
        const params = qs.parse(route.query)
      
      
        if(path === '/hello' && 'name' in params) {
          if(params['name']=='julien')
          {
            res.write('Hello, i m julien, i m 20 years old and i like coding with node');
          } else{
            res.write('Hello ' + params['name']);
          }
          
        }
        else if(path === '/hello'){
          res.write('Hello Anonymous');
        }
      else{
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(error.content);
      }
        res.end();
      }
  }