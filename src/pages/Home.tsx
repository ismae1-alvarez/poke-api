import { Fragment, useEffect, useRef, useState } from "react"
import { useAppSelector } from "../store"
import useFetch from "../hook/useFetch"
import { NavBar, Prueba, Prueba2, SelectType } from "../components"

function Home() {
  const [pokemon, setPokemon] = useState<string>('');
  const [optionPokemon, setOptionPokemon] = useState<string>('All')

  const [currentPage, setCurrentPage] = useState<number>(1)
  const pokemonPage = 5

  const trainer  =  useAppSelector(values => values.trainer.trainer)
  const {pokemonApi, apiFetch, fetchOption} = useFetch()

  const searchPokemon = useRef<HTMLInputElement | null>(null);

  useEffect(()=>{
    if(optionPokemon === 'All'){
      const url = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0' 
      apiFetch(url)
    }else{
      fetchOption(optionPokemon)
    }
  },[optionPokemon])

  const handleSeacrhingPokemon = (e: React.FormEvent<HTMLFormElement>)=> {
    e.preventDefault()
    if (searchPokemon.current) {
      setPokemon(searchPokemon.current.value.trim().toLowerCase())
      setCurrentPage(1);
    }
  }
  
  const searchingPokemon = (poke:Url) => {
    return poke.name.toLowerCase().includes(pokemon);
  };
  const filteredPokemon = pokemonApi?.results.filter(searchingPokemon);
  const indeOfLastPost = currentPage * pokemonPage;
  const indexOfFirstPost =  indeOfLastPost - pokemonPage;
  const currentPokemon =  filteredPokemon?.slice(indexOfFirstPost, indeOfLastPost)


  return (
    <Fragment>
      <NavBar/>
      <div className="">{trainer}</div>
      <div className="flex w-full gap-5 py-10 flex-wrap">
          <form onSubmit={(e)=> handleSeacrhingPokemon(e)} className="flex gap-1 justify-between mx-5">
              <input type="text" placeholder="Searching Pokemon" className="py-3 px-3 bg-gray-300 bg-opacity-60 rounded-md " ref={searchPokemon}/>
              <button type="submit" className="py-2 px-3 bg-global rounded-md text-white font-bold">Searching</button>
          </form>

          <SelectType  setOptionPokemon={setOptionPokemon}/>
      </div>

      {
        pokemonApi?.results.length &&  <Prueba2 pokemonApi={currentPokemon} searchingPokemon={searchingPokemon} pokemon={pokemon} />
      }


      {
        filteredPokemon && filteredPokemon.length > 0 &&
        (<Prueba 
          pokemonPage={pokemonPage} 
          totalPokemon={filteredPokemon}
          setCurrentPage={setCurrentPage} />
        )
      }
    </Fragment>

  )
}
export default Home