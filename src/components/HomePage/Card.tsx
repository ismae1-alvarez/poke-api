import { Fragment, useEffect } from "react"
import useFetch from "../../hook/useFetch"
import {  useNavigate } from "react-router-dom"

interface Props {
    poke :Url
}


function Card({poke}:Props) {

    const {pokemonStack, fetchDetails} = useFetch()
    const navigate = useNavigate()

    useEffect(()=>{
      fetchDetails(poke.url)
    }, [])

    const handeNavDetail = ()=>{
      navigate(`/pokemon/${poke.name}`)
    }
    
    return (
      <Fragment>
        <article onClick={handeNavDetail}>
          <header>
            <img src={pokemonStack?.sprites.other.home?.front_default}  className="w-20" alt="#"/>        
          </header>

          <section>
            <h2>{pokemonStack?.name}</h2>
            <ul>
              {pokemonStack?.types.map(stack => (
                <li key={stack.type.name}>{stack.type.name}</li>
              ))}
            </ul>
          </section>

          <ul>
            {pokemonStack?.stats.map(stats=> (
              <li key={stats.stat.url}>
                <span>{stats.stat.name}</span>
                <span>
                  {stats.base_stat}
                </span>
              </li>
            ))}
          </ul>
        </article>
      </Fragment>
  )
}
export default Card