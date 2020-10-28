# TP4 REACT

Ce tp a pour but d'apprendre react notamment en utilisant la syntaxe jsx.
Le jsx est une extension du js qui permet de creer des composants html et de gérer chaqu'un d'eux séparément sans se soucier des autres
On se rend alors compte de la puissance de react qui re-actualise chaque composant séparement

## installation
```html

    <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js" defer></script>
    <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" defer></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
    <script src="index.js" defer type="text/babel"></script>

```
## Utile dans ce tp

```js

    class ClassName extends React.Component {}

    render() {
      return (...);

    constructor(props) {
      super(props);
      this.state = {...}

    ReactDOM.render(*React.Component*, document.getElementById("id"));

```

## Contributeurs
Merci au professeur, monsieur FRYDMAN qui a donné ce cours et aux sites :
[react](https://fr.reactjs.org/tutorial/tutorial.html)