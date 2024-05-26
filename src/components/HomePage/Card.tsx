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

    const color  = pokemonStack?.types[0].type.name;
    
    return (
      <Fragment>
        {
          pokemonStack && 
          (
            <article  onClick={handeNavDetail} className={`bg-${color} p-3 rounded-md md:w-fit  w-fi mx-3 md:my-0  my-5 `}>
              <header className={`bg-${color} relative h-52 rounded-sm`}>
                <img src={pokemonStack?.sprites.other.home?.front_default}  className="absolute -bottom-10   right-0 left-[50%] translate-x-[-50%]" alt="#"/>        
              </header>

              <section className="bg-white pt-10 rounded-b-sm px-3 space-y-3">
                <section className="flex flex-col justify-center items-center">
                  <h2 className={`text-xl text-center py-3 text-${color} capitalize font-semibold`}>{pokemonStack?.name}</h2>
                  <ul className="flex justify-center  gap-1 items-center ">
                    {pokemonStack?.types.map((stack, index) => (
                      <li className={`after:content-['/'] after:ml-1 ${index === pokemonStack.types.length - 1 ? 'after:content-none' : ''}`} key={stack.type.name}>{stack.type.name}</li>
                    ))}
                  </ul>
                  <p className="opacity-70">tipo</p>
                </section>

                <hr  className="border-t border-black border-opacity-30"/>

                <ul className="grid grid-cols-2 gap-1 ">
                  {pokemonStack?.stats.map(stats=> (
                    <li className=" flex flex-col py-1 px-2" key={stats.stat.url}>
                      <span className={`font-normal capitalize`}>{stats.stat.name}</span>
                      <span className={`text-${color} `}>
                        {stats.base_stat}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            </article>
          )
        }
      </Fragment>
  )
}
export default Card