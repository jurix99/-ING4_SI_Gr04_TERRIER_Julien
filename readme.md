# TP2

Le tp2 montre l'utilisation de node.js avec les routes et les modules et le package express.js .
Le but est d'assigner a certains url des affichages differents en utilisant les functions d'express.
Ce tp est la réutilisation du premier tp sous express.

## installation
```python
git branch tp1
touch index.js
touch handle.js
touch reame.md

npm init
npm install --save express

Modification de tous les fichiers

git commit -m 'tp2'
git push
```
## Utile dans ce tp

```js
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    ...
    html = [
      `html`,
    ].join('')
    res.send(html)
  })

req.params.name


module.exports = {...}
```

## Contributeurs
Merci au professeur, monsieur FRYDMAN qui a donné ce cours et aux sites :
[npmjs](https://www.npmjs.com/package/express)