'use strict';
/*------------------------------------------------------------------------------
Complete the four functions provided in the starter `index.js` file:

`fetchData`: In the `fetchData` function, make use of `fetch` and its Promise 
  syntax in order to get the data from the public API. Errors (HTTP or network 
  errors) should be logged to the console.

`fetchAndPopulatePokemons`: Use `fetchData()` to load the pokemon data from the 
  public API and populates the `<select>` element in the DOM.
  
`fetchImage`: Use `fetchData()` to fetch the selected image and update the 
  `<img>` element in the DOM.

`main`: The `main` function orchestrates the other functions. The `main` 
  function should be executed when the window has finished loading.

Try and avoid using global variables. Instead, use function parameters and 
return values to pass data back and forth.
------------------------------------------------------------------------------*/

async function fetchData(url) {
  // TODO complete this function
  const response = await fetch(url);
  const json = await response.json();
  return json;
}

function fetchAndPopulatePokemons(pokemons, select) {
  // TODO complete this function
  select.textContent = '';
  pokemons.forEach((pokemon) => {
    const option = document.createElement('option');
    select.appendChild(option);
    option.value = pokemon.name;
    option.textContent = pokemon.name;
  });
}

async function main() {
  const div = document.createElement('div');
  document.body.appendChild(div);
  div.style.width = '120px';

  const button = document.createElement('button');
  div.appendChild(button);
  button.id = 'button';
  button.setAttribute('type', 'button');
  button.textContent = 'Get Pokemon!';

  const select = document.createElement('select');
  div.appendChild(select);
  select.id = 'select';

  const img = document.createElement('img');

  button.addEventListener('click', async () => {
    try {
      const data = await fetchData(
        'https://pokeapi.co/api/v2/pokemon/?offset=151&limit=151'
      );
      fetchAndPopulatePokemons(data.results, select);
    } catch (error) {
      console.log(error);
    }
  });

  select.addEventListener('change', async function fetchImage() {
    try {
      const resp = fetchData(
        `https://pokeapi.co/api/v2/pokemon/${select.value}`
      );
      const imageData = await resp;
      const image = imageData.sprites.front_default;
      div.appendChild(img).src = image;
    } catch (error) {
      console.log(error);
    }
  });
}
window.addEventListener('load', main);
