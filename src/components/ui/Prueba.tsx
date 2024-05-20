interface Props {
    pokemonPage: number;
    totalPokemon: Url[];
    setCurrentPage: (page: number) => void;
}


const Prueba = ({totalPokemon,  pokemonPage, setCurrentPage}: Props) => {
    const pageNumber = [];
    for (let i = 1; i  <= Math.ceil(totalPokemon?.length /  pokemonPage); i++) {
        pageNumber.push(i)
        
    }

    // console.log(pageNumber)
    // console.log('cambia')


  return (
    <nav>
        <ul>
        {pageNumber.map((number) => (
          <li key={number}>
            <button onClick={() => setCurrentPage(number)}>{number}</button>
          </li>
        ))}
        </ul>
    </nav>
  )
}
export default Prueba