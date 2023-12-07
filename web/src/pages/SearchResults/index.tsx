import React, { useState, useEffect } from 'react';
import * as S from './styles';

interface Establishment {
  id: number;
  name: string;
  address: string;
  mobile: string;
  description: string;
  cep: string;
}

const itemsPerPage = 5;

const SearchPage: React.FC = () => {
  const [searchResults, setSearchResults] = useState<Establishment[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/establishment/detail?busca=${encodeURIComponent(
            searchTerm
          )}`
        );

        if (response.ok) {
          const establishments: Establishment[] | undefined =
            await response.json();

          if (Array.isArray(establishments)) {
            setSearchResults(establishments);
          } else {
            setSearchResults([]);
          }
        } else {
          console.error(
            `Erro na requisição: ${response.status} - ${response.statusText}`
          );
        }
      } catch (error) {
        console.error('Erro durante a requisição:', error);
      }
    };

    if (showResults) {
      fetchData();
    }
  }, [searchTerm, showResults]);

  const handleSearch = () => {
    setShowResults(true);
    setCurrentPage(1); // Reinicia a página ao iniciar uma nova pesquisa
  };

  const handleClearSearch = () => {
    setShowResults(false);
    setSearchTerm('');
    setCurrentPage(1); // Reinicia a página ao limpar a pesquisa
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = searchResults.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <S.SearchContainer>
      <S.ResultTitle>Pontos de doação</S.ResultTitle>
      <S.SearchInput
        type="text"
        placeholder="Buscar por endereço ou local"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <S.SearchButton onClick={handleSearch}>Pesquisar</S.SearchButton>

      <div>
        {showResults ? (
          <div>
            <S.ResultTitle>
              Locais {showResults && `(${searchResults.length})`}
            </S.ResultTitle>
            {currentItems.map(result => (
              <S.ResultItem key={result.id}>
                <div>Nome: {result.name}</div>
                <div>Endereço: {result.address}</div>
                <div>CEP: {result.cep}</div>
                <div>Celular: {result.mobile}</div>
                <div>Descrição: {result.description}</div>
              </S.ResultItem>
            ))}
            <S.Pagination>
              {Array.from(
                { length: Math.ceil(searchResults.length / itemsPerPage) },
                (_, index) => (
                  <S.PageButton
                    key={index + 1}
                    onClick={() => handlePageChange(index + 1)}
                    isActive={currentPage === index + 1}
                  >
                    {index + 1}
                  </S.PageButton>
                )
              )}
            </S.Pagination>
          </div>
        ) : null}
      </div>

      {showResults && searchResults.length > 0 && (
        <S.ButtonContainer>
          <S.Button onClick={handleClearSearch}>Limpar Busca</S.Button>
        </S.ButtonContainer>
      )}
    </S.SearchContainer>
  );
};
export default SearchPage;
