import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import { Box, Typography, Pagination } from "@mui/material";

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const fetchPokemonList = async () => {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/?limit=10&offset=${
        (currentPage - 1) * 10
      }`
    );

    const updatedPokemonList = await Promise.all(
      response.data.results.map(async (pokemon, index) => {
        const pokemonDetails = await fetchPokemonDetails(pokemon.url);
        return {
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          url: pokemon.url,
          sprites: pokemonDetails.sprites,
        };
      })
    );

    setPokemonList(updatedPokemonList);
  };

  const fetchPokemonDetails = async (url) => {
    const response = await axios.get(url);
    return response.data;
  };

  useEffect(() => {
    fetchPokemonList();
  }, [currentPage]);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const handlePokemonClick = async (url) => {
    const pokemonDetails = await fetchPokemonDetails(url);

    const updatedSelectedPokemon = {
      id: pokemonDetails.id,
      name: pokemonDetails.name,
      height: pokemonDetails.height,
      weight: pokemonDetails.weight,
      sprites: pokemonDetails.sprites,
    };

    setSelectedPokemon(updatedSelectedPokemon);
  };

  return (
    <div className="pokemon-list-container">
      <h1>Pokemon List</h1>
      <div className="pokemon-list">
        {pokemonList.map((pokemon) => (
          <li
            key={pokemon.id}
            className="pokemon-item"
            onClick={() => handlePokemonClick(pokemon.url)}
          >
            <div>{pokemon.id}</div>
            <div>{pokemon.name}</div>
            {pokemon.sprites && (
              <img className="photo" src={pokemon.sprites.front_default} alt={pokemon.name} />
            )}
          </li>
        ))}
      </div>
      <div className="pokemon-details">
        {selectedPokemon && (
          <Box>
            <Typography variant="h2">{selectedPokemon.name}</Typography>
            <Typography variant="body1">ID: {selectedPokemon.id}</Typography>
            <Typography variant="body1">
              Height: {selectedPokemon.height}
            </Typography>
            <Typography variant="body1">
              Weight: {selectedPokemon.weight}
            </Typography>
          </Box>
        )}
      </div>
      <div className="pagination-container">
        <Pagination
          count={Math.ceil(10271 / 10)}
          page={currentPage}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default PokemonList;
