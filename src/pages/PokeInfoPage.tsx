import { Fragment, useEffect } from "react"
import { useParams } from "react-router-dom"
import useFetch from "../hook/useFetch"
import { NavBar } from "../components"

function PokeInfoPage() {
    const {pokemonStack, fetchPokemon}  =  useFetch()
  const  {name} = useParams()
  
  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}/`
    fetchPokemon(url)
  }, [name])
  


  const color  = pokemonStack?.types[0].type.name;
  return (
    
    <Fragment>
            <NavBar/>
            <main className="py-10 relative ">
            <section className={`relative w-full  md:w-2/4 mx-auto  p-2 mt-10 space-y-5 shadow-2xl rounded-md `}>
                <header className={`bg-${color} relative h-40 rounded-sm`}>
                    <img src={pokemonStack?.sprites.other.home?.front_default}  className=" mx-auto absolute w-[45%] -top-[75%]  md:-top-[85%] right-0 left-[50%] translate-x-[-50%]" alt="#"/>        
                </header>
                <section className="relative flex mx-auto w-full flex-col  gap-2 py-2  items-center">
                    <span className=" py-2 px-5 rounded-md font-bold text-xl bg-gray-300 ">#{pokemonStack?.id}</span>
                    {/* Falta por poner los bordes */}
                    <h2 className={` text-${color} w-full text-center  relative  text-2xl capitalize font-bold `}>{pokemonStack?.name}</h2>
                </section>

                <ul className="grid capitalize grid-cols-2 py-2 w-full text-center text-xl ">
                    <li className="grid">
                        <span className={`text-${color} text-center`}>peso</span> <span>{pokemonStack?.weight}</span>
                    </li>
                    <li className="grid">
                        <span className={`text-${color} text-center`}>altura</span> <span>{pokemonStack?.height}</span>
                    </li>
                </ul>

                <section className="grid capitalize grid-cols-2 w-full  py-2  gap-1">

                    <div className="grid  text-center space-y-3 justify-center">
                        <h4  className={`font-bold text-md text-${color}`}>Tipo</h4>
                        <ul className="flex gap-2 text-white items-center">
                            {pokemonStack?.types.map(stack => (
                                <li className={`px-3 py-2  rounded-md  bg-${stack.type.name}`} key={stack.type.url}>{stack.type.name}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="grid  text-center space-y-2">
                        <h4 className={`font-bold text-md text-${color}`}>Habilidades</h4>
                        <ul className="flex gap-2 flex-wrap">
                            {pokemonStack?.abilities.map(abilities=> (
                                <li  className={`px-3 py-3 bg-gray-100 rounded-md`} key={abilities.ability.url}>{abilities.ability.name}</li>
                            ))}

                        </ul>
                    </div>
                </section>
            </section>

            <section className="w-full px-10 md:w-2/4  mx-auto py-10 space-y-5 shadow-2xl md:px-5 rounded-md mt-20">
                {/* chechar aqui tambien */}
                <div className="flex w-full">
                    <h2 className="capitalize text-3xl font-bold ">Stats</h2> <hr className="border-2 border-b-teal-200"/>
                </div>
                <div>
                    {pokemonStack?.stats.map(stat=> (
                    <div key={stat.stat.url}>
                        <div className="flex justify-between " >
                            <p>{stat.stat.name}:</p>
                            <p>{stat.base_stat} / 150</p>
                        </div>
                        <div className="w-full bg-gray-300 rounded-md h-2 overflow-hidden">
                            <div 
                                className={`bg-${color} h-full rounded-md`} 
                                style={{ width: `${(stat.base_stat / 150) * (stat.base_stat / 150) * 100}%` }}
                            ></div>
                        </div>
                    </div>
                    ))}
                </div>
            </section>

            <footer className="w-full md:w-3/4  mx-auto px-10 md:py-10">
                <h2 className="capitalize text-3xl font-bold py-3">Movements</h2>
                <ul className="grid grid-cols-5 gap-3">
                    {pokemonStack?.moves.map(move=> (
                        <li className="bg-gray-300 font-thin text-sm flex justify-center items-center rounded-md py-2 px3" key={move.move.url}>{move.move.name}</li>
                    ))}
                </ul>
            </footer>
        </main>
    </Fragment>
  )
}
export default PokeInfoPage