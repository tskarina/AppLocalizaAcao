// styles.ts
import styled from 'styled-components';

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ffff;
  height: 100vh; /* Ocupa toda a altura da tela */
`;

export const SearchInput = styled.input`
  width: 40vw;
  background: rgba(216, 207, 199, 0.2);
  padding: 15px 16px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  border-style: none;
`;

export const SearchButton = styled.button`
  background: #2192ab;
  border: none;
  padding: 8px 8px;
  cursor: pointer;
  color: #fff;
`;

export const ResultItem = styled.div`
  background-color: white;
  border: 1px solid #ddd;
  margin: 10px 0;
  padding: 10px;
  width: 1000px;
`;

export const ResultTitle = styled.h2`
  color: #2192ab;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 46px; /* 191.667% */
`;

export const Span = styled.div`
  color: #3f3f3f;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 8px;
`;

export const ButtonContainer = styled.div`
  margin-top: 20px;
`;

export const Button = styled.button`
  background: #2192ab;
  border: none;
  padding: 8px 8px;
  cursor: pointer;
  color: #fff;
`;

export const InputText = styled.div`
  color: #616161;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 16px;
`;

export const InputPassword = styled.input`
  width: 292px;
  height: 56px;
  margin-top: 8px;
  border: none;
  background: rgba(219, 221, 221, 0.33);
  font-size: 20px;
`;

export const ErrorMsg = styled.div`
  color: #616161;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 10px;
`;

export const ExpandButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: blue; // Adicione seus estilos conforme necessário
`;

export const Arrow = styled.img`
  margin-left: 970px;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const PageButton = styled.button<{ isActive: boolean }>`
  background: ${({ isActive, theme }) =>
    isActive ? theme.primary : theme.background};
  color: ${({ isActive, theme }) => (isActive ? theme.white : theme.text)};
  border: 1px solid ${({ theme }) => theme.primary};
  padding: 8px 16px;
  margin: 0 4px;
  cursor: pointer;
`;
