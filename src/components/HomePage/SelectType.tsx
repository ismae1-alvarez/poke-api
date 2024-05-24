import { useEffect } from "react"
import useFetch from "../../hook/useFetch"

interface Props {
    setOptionPokemon :React.Dispatch<React.SetStateAction<string>>
}

function SelectType({setOptionPokemon}:Props) {

    const {pokemonApi, apiFetch} = useFetch()

    useEffect(() => {
        const url = `https://pokeapi.co/api/v2/type/?offset=0&limit=100`
        apiFetch(url)
    }, [])
    
    const handleOption = (e: React.ChangeEvent<HTMLSelectElement>)=>{
        setOptionPokemon(e.target.value)
    }

    return (
    <select  onChange={(e)=> handleOption(e)} className="px-10 rounded-md">
        <option value="All">All Pokemon</option>
        {pokemonApi?.results.map(option => (
            <option className="bg-red-900"  key={option.url} value={option.url}>{option.name}</option>
        ))}
    </select>
  )
}
export default SelectType