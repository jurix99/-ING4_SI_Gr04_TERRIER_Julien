# TP5 MESSAGERIE REACT

Ce tp a pour but d'approfondir nos connaissances sur react en créant le front end react d'une messagerie. Afficher les messages d'un channel, envoyer des messsages ou afficher les informations du channel sont demandés dans ce tp.

## installation
```js

    import React from 'react';
    import ReactDOM from 'react-dom';

```
## Utile dans ce tp

 ### REACT
```js

    class Class extends React.Component {}

    render() {
      return (...);

    constructor(props) {
      super(props);
      this.state = {...}

    ReactDOM.render(Class, document.getElementById("id"));

    handleChange(event)
    handleSubmit(event)

```
 ### MOMENT.JS
```js
    npm install moment

    import 'moment/locale/fr';

    const moment = require('moment');
    moment.locale('fr');

    moment().diff()
    moment().format()
    moment().calendar()
```

## Contributeurs
Merci au professeur, monsieur FRYDMAN qui a donné ce cours et aux sites :
[react](https://fr.reactjs.org/tutorial/tutorial.html)
[moment.js](https://https://momentjs.com/)
[videos](https://www.youtube.com/watch?v=SMgQlTSoXf0&list=PLjwdMgw5TTLWom67YfZuha-1iYzIirwJR)