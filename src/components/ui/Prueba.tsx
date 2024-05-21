import { useState } from "react";

interface Props {
    pokemonPage: number;
    totalPokemon: Url[];
    setCurrentPage: (page: number) => void;
}


const Prueba = ({ totalPokemon, pokemonPage, setCurrentPage }: Props) => {
  const totalPages = Math.ceil(totalPokemon.length / pokemonPage);
  const [currentPage, setCurrentPageState] = useState(1);

  const maxPagesToShow = 5;
  const halfMaxPagesToShow = Math.floor(maxPagesToShow / 2);

  const handleSetCurrentPage = (page: number) => {
      if (page < 1 || page > totalPages) return;
      setCurrentPageState(page);
      setCurrentPage(page);
  };

  const getPageNumbers = () => {
      let startPage = Math.max(currentPage - halfMaxPagesToShow, 1);
      let endPage = Math.min(startPage + maxPagesToShow - 1, totalPages);

      if (endPage - startPage < maxPagesToShow - 1) {
          startPage = Math.max(endPage - maxPagesToShow + 1, 1);
      }

      const pages = [];
      for (let i = startPage; i <= endPage; i++) {
          pages.push(i);
      }
      return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
      <nav>
          <ul className="flex gap-2 flex-wrap">
              {currentPage > 1 && (
                  <>
                      <li>
                          <button onClick={() => handleSetCurrentPage(1)}>First</button>
                      </li>
                      <li>
                          <button onClick={() => handleSetCurrentPage(currentPage - 1)}>Previous</button>
                      </li>
                  </>
              )}
              {pageNumbers.map((number) => (
                  <li key={number}>
                      <button onClick={() => handleSetCurrentPage(number)}>{number}</button>
                  </li>
              ))}
              {currentPage < totalPages && (
                  <>
                      <li>
                          <button onClick={() => handleSetCurrentPage(currentPage + 1)}>Next</button>
                      </li>
                      <li>
                          <button onClick={() => handleSetCurrentPage(totalPages)}>Last</button>
                      </li>
                  </>
              )}
          </ul>
      </nav>
  );
}

export default Prueba;
