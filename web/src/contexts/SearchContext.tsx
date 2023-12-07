// src/contexts/SearchContext.tsx
import React, { createContext, useContext, ReactNode, useState } from 'react';

interface SearchContextProps {
  searchResults: Establishment[];
  setSearchResults: React.Dispatch<React.SetStateAction<Establishment[]>>;
}

interface Establishment {
  id: number;
  name: string;
  address: string;
  // Adicione outras propriedades conforme necessário
}

const SearchContext = createContext<SearchContextProps | undefined>(undefined);

export const SearchProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [searchResults, setSearchResults] = useState<Establishment[]>([]);

  return (
    <SearchContext.Provider value={{ searchResults, setSearchResults }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearchContext must be used within a SearchProvider');
  }
  return context;
};
