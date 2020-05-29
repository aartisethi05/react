import React, { Component } from "react";
import Card from "./card";

class Pokemon extends Component {
  constructor() {
    super();
    this.state = { allPokemons: [] };
  }

  getPokemon = (_) => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=5")
      .then((response) => response.json())
      .then((allpokemon) => {
        console.log(allpokemon);
        const pokemons = allpokemon.results;
        pokemons.map((pokemon) => {
          this.getPokeData(pokemon.url);
        });
      });
  };

  getPokeData = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then(
        (pokeData) => {
          const allPokemons = this.state.allPokemons;
          allPokemons.push({
            name: pokeData.name,
            id: pokeData.id,
          });
          this.setState({
            allPokemons: allPokemons,
          });
        }
        // this.setState({ allPokemons: pokeData }, () =>
        //   console.log(`Inside call back`, this.state.allPokemons)
        // )
      );
  };

  componentDidMount() {
    this.getPokemon();
  }

  render() {
    return(
    <div className="main">
   { this.state.allPokemons.map((pokemon) => {
      return <Card key={pokemon.id} name={pokemon.name} pokeid={pokemon.id} />;
    })
  }
    </div>
    )
  }
}

export default Pokemon;
