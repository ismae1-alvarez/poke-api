import axios from 'axios'
import { useState } from 'react'

function useFetch() {

    // State Get Pokemon
    const [pokemonApi, setPokemonApi] = useState<Pokemon>()

    // State Stack Pokemones
    const [pokemonStack, setPokemonStack] = useState<DetailedPokemonInfo>()

    // State pokemon 
    // const [pokemon, setPokemon] = useState<PokemonInfo>()


    const apiFetch = (url:string)=>{
        axios.get(url)
            .then(res => {
                setPokemonApi(res.data)
            })
            .catch(err => console.log(err))
    }

    const fetchDetails = (url:string)=>{
        axios.get(url)
            .then(res => {
                setPokemonStack(res.data)
            })
            .catch(err => console.log(err))
    }
    const fetchPokemon = (url:string)=>{
        axios.get(url)
            .then(res => {
                setPokemonStack(res.data)
            })
            .catch(err => console.log(err))
    }

    const fetchOption = (url:string)=>{
        axios.get(url)
        .then(res => {
            const obj:Pokemon = {
                results : res.data.pokemon.map((e:PokemonSlot) => e.pokemon)
            }
            setPokemonApi(obj)
        })
        .catch(err => console.log(err))
    }

    


    return {pokemonApi, apiFetch, pokemonStack, fetchDetails,  fetchPokemon, fetchOption}
}
export default useFetch