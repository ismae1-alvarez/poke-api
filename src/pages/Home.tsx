import { Fragment, useEffect, useRef, useState } from "react"
import { useAppSelector } from "../store"
import useFetch from "../hook/useFetch"
import { Prueba, Prueba2, SelectType } from "../components"

function Home() {
  const [pokemon, setPokemon] = useState<string>('');
  const [optionPokemon, setOptionPokemon] = useState<string>('All')

  // Page
  // const [arrPage, setArrPage] = useState<number[]>([])
  // const [loading, setLoading] = useState<boolean>(false)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [pokemonPage, setPokemonPage] = useState<number>(5)

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

  // Prueba 
  // useEffect(() => {
  //   // Reiniciar la página actual cuando cambie el término de búsqueda o la opción de filtro
  //   setCurrentPage(1);
  // }, [pokemon, optionPokemon]);

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
      <div>{trainer}</div>

      <form onSubmit={(e)=> handleSeacrhingPokemon(e)}>
        <input type="text" placeholder="Searching Pokemon" ref={searchPokemon}/>
        <button type="submit">Searching</button>
      </form>

      <SelectType  setOptionPokemon={setOptionPokemon}/>

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