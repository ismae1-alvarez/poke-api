import { Fragment, useEffect, useRef, useState } from "react"
import { useAppSelector } from "../store"
import useFetch from "../hook/useFetch"
import { Card, SelectType } from "../components"

function Home() {
  const [pokemon, setPokemon] = useState<string>('');
  const [optionPokemon, setOptionPokemon] = useState<string>('All')

  const trainer  =  useAppSelector(values => values.trainer.trainer)
  const {pokemonApi, apiFetch, fetchOption} = useFetch()

  const searchPokemon = useRef<HTMLInputElement | null>(null);

  useEffect(()=>{
    if(optionPokemon === 'All'){
      const url = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'
      apiFetch(url)
    }else{
      fetchOption(optionPokemon)
    }
  },[optionPokemon])

  


  const handleSeacrhingPokemon = (e: React.FormEvent<HTMLFormElement>)=> {
    e.preventDefault()
    if (searchPokemon.current) {
      setPokemon(searchPokemon.current.value.trim().toLowerCase())
    }
  }
  
  const searchingPokemon = (poke:Url) => {
    return poke.name.toLowerCase().includes(pokemon);
  };


  return (
    <Fragment>
      <div>{trainer}</div>

      <form onSubmit={(e)=> handleSeacrhingPokemon(e)}>
        <input type="text" placeholder="Searching Pokemon" ref={searchPokemon}/>
        <button type="submit">Searching</button>
      </form>
      
      <SelectType setOptionPokemon={setOptionPokemon}/>
      

      <div>
        {
          pokemonApi && pokemonApi.results.filter(searchingPokemon).length === 0
          ? <h3>Error no exist pokemons {pokemon}</h3>

          :(pokemonApi?.results.filter(searchingPokemon).map(poke => (
            <Card key={poke.name} poke={poke} />
          )))
        }
      </div>
    </Fragment>

  )
}
export default Home