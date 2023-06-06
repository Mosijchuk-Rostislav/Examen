// import React, { useEffect, useState} from "react";
// import axios from "axios";
// import "./App.css";
// import Button from '@mui/material/Button';

import React from 'react';
import PokemonList from './components/PokemonList';

const App = () => {
  return (
    <div>
      <PokemonList />
    </div>
  );
};

export default App;


// const App = () => {
//   const [pokemonList, setPokemonList] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [selectedPokemon, setSelectedPokemon] = useState(null);
//   const [pokemonsPerPage] = useState(10);

//   useEffect(() => {
//     const fetchPokemon = async () => {
//       try {
//         const response = await axios.get(
//           `https://pokeapi.co/api/v2/pokemon?limit=${pokemonsPerPage}&offset=${
//             (currentPage - 1) * pokemonsPerPage
//           }`
//         );
//         setPokemonList(response.data.results);
//       } catch (error) {
//         console.error(error);
//       }
//     };
  
//     fetchPokemon();
//   }, [currentPage]);
  

//   const fetchPokemonDetails = async (pokemon) => {
//     try {
//       const response = await axios.get(pokemon.url);
//       setSelectedPokemon(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const totalPages = Math.ceil(pokemonList.length / pokemonsPerPage);
//   const pageNumbers = [];

//   for (let i = 1; i <= totalPages; i++) {
//     pageNumbers.push(i);
//   }

//   return (
//     <div>
//       <h1>Pokemon List</h1>
//       <ul>
//         {pokemonList.map((pokemon) => (
//           <li key={pokemon.name} onClick={() => fetchPokemonDetails(pokemon)}>
//             {pokemon.name}
//           </li>
//         ))}
//       </ul>

//       <div>
//         {pageNumbers.map((number) => (
//           <button
//             key={number}
//             onClick={() => setCurrentPage(number)}
//             disabled={currentPage === number}
//           >
//             {number}
//           </button>
//         ))}
//       </div>

//       {selectedPokemon && (
//         <div>
//           <h2>{selectedPokemon.name}</h2>
//           <img
//             src={selectedPokemon.sprites.front_default}
//             alt={selectedPokemon.name}
//           />
//           <p>Height: {selectedPokemon.height}</p>
//           <p>Weight: {selectedPokemon.weight}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;
