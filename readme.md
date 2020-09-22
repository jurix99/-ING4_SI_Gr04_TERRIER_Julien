# TP1

Le tp1 montre l'utilisation de node.js avec les routes et les modules.
Le but est d'assigner a certains url des affichages differents.

## installation
```python
git branch tp1
touch index.js
touch handle.js
touch reame.md

npm init
git commit -m 'tp1'
git push
```
## Utile dans ce tp

```js
const http = require('http');
const url = require('url');
const qs = require('querystring');

serverHandle :function (req, res) {
        const route = url.parse(req.url)
        const path = route.pathname 
        const params = qs.parse(route.query)
        ...
}

module.exports = {...}
```

## Contributeurs
Merci au professeur, monsieur FRYDMAN qui a donné ce cours et aux sites :
[w3schools](https://www.w3schools.com/nodejs/nodejs_modules.asp)
[makeaReadMe](https://www.makeareadme.com/)