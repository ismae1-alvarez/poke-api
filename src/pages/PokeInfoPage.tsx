import { useEffect } from "react"
import { useParams } from "react-router-dom"
import useFetch from "../hook/useFetch"

function PokeInfoPage() {
    const {pokemonStack, fetchPokemon, pokemonesEvolution, fetchPokemonEvolution}  =  useFetch()
  const  {name} = useParams()
  
  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}/`
    fetchPokemon(url)

    // Tener que chechar
    if(pokemonStack?.id){
        
        const url = `https://pokeapi.co/api/v2/evolution-chain/${pokemonStack.id}/`
        fetchPokemonEvolution(url)
    }
  }, [name, pokemonStack?.id])

  

  
  return (
    <main>
        <section>
            <header>
                <img src={pokemonStack?.sprites.other.home?.front_default}  className="w-20" alt="#"/>        
            </header>

            <section>
                <span>#{pokemonStack?.id}</span>
                <h2>{pokemonStack?.name}</h2>
            </section>

            <ul>
                <li>
                    <span>peso</span> <span>{pokemonStack?.weight}</span>
                </li>
                <li>
                    <span>altura</span> <span>{pokemonStack?.height}</span>
                </li>
            </ul>

            <section>
                <ul>
                    <h4>Tipo</h4>
                    {pokemonStack?.types.map(stack => (
                        <li key={stack.type.url}>{stack.type.name}</li>
                    ))}
                </ul>

                <ul>
                    <h4>Habilidades</h4>
                    {pokemonStack?.abilities.map(abilities=> (
                        <li key={abilities.ability.url}>{abilities.ability.name}</li>
                    ))}

                </ul>
            </section>
        </section>

        <section>
            <h2>Stats</h2>
            <div>
                {pokemonStack?.stats.map(stat=> (
                   <div key={stat.stat.url}>
                    <p>{stat.stat.name}:</p>
                    <p>{stat.base_stat}</p>
                   </div>
                ))}
            </div>
        </section>

        <footer>
            <h2>Movements</h2>
            {pokemonStack?.moves.map(move=> (
                <li key={move.move.url}>{move.move.name}</li>
            ))}
        </footer>
    </main>
  )
}
export default PokeInfoPage