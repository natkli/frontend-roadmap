var div = document.querySelector('#response');

fetch('https://pokeapi.co/api/v2/pokemon/ditto/')
  .then(res => res.json())
  .then(res => console.log(res));
