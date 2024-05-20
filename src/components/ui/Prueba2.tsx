import Card from "../HomePage/Card"

interface Props { 
    pokemonApi:  Url[] | undefined;
    searchingPokemon : (poke: Url) => boolean;
    pokemon: string;
}

const Prueba2 = ({pokemonApi,searchingPokemon, pokemon}:Props) => {


    return (
    <div>
        <div>
            {   
                pokemonApi && pokemonApi.filter(searchingPokemon).length === 0
                ? <h2>No Existe el pokemons {pokemon}</h2>
                :(pokemonApi?.filter(searchingPokemon).map(poke=> (
                    <Card key={poke.url} poke={poke}/> 
                )))
            }
        </div>
        {/* <div>
        {
          pokemonApi && pokemonApi.results.filter(searchingPokemon).length === 0
          ? <h3>Error no exist pokemons {pokemon}</h3>

          :(pokemonApi?.results.filter(searchingPokemon).map(poke => (
            <Card key={poke.name}  poke={poke}/>
          )))
        }
      </div> */}
    </div>
  )
}
export default Prueba2