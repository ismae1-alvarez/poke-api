import Card from "../HomePage/Card"

interface Props { 
    pokemonApi:  Url[] | undefined;
    searchingPokemon : (poke: Url) => boolean;
    pokemon: string;
}

const Prueba2 = ({pokemonApi,searchingPokemon, pokemon}:Props) => {


    return (
    <div>
        <div className="flex gap-5 flex-wrap mx-auto justify-center md:justify-start">
            {   
                pokemonApi && pokemonApi.filter(searchingPokemon).length === 0
                ? <h2>No Existe el pokemons {pokemon}</h2>
                :(pokemonApi?.filter(searchingPokemon).map(poke=> (
                    <Card key={poke.url} poke={poke}/> 
                )))
            }
        </div>
    </div>
  )
}
export default Prueba2