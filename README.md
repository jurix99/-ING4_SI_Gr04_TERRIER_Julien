# TP6 JWT

Ce tp a pour but de creer un token à la connexion de l'utilisateur, pour lui permettre de rester connecter et de s'identifier pour une certaine durée.

## installation
```js

    var jwt = require('jsonwebtoken');

```
## Utile dans ce tp

 ### JWT functions
```js

    jwt.sign({user}, 'secretkey', { expiresIn: '30s' }, (err, token) => {}
    jwt.verify(req.token, 'secretkey', (err, authData) => {}
    const bearerHeader = req.headers['authorization'];

```
 ### PostMan
Vérification sur postman du bon fonctionnement du token.
- Faire un post de login
- Copier le token
- L'ajouter dans le header authorization du chemin demandant une verification token
- Voir l'affichage des infos de l'utilisateur si l'expiration n'est pas arrivée

## Contributeurs
Merci au professeur, monsieur FRYDMAN qui a donné ce cours et aux sites :
Sur campus : [pdf]
[videos](https://www.youtube.com/watch?v=mbsmsi7l3r4)
