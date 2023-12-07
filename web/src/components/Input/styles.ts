import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
`;

export const InputStyled = styled.input`
  border: none;
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.text};
  border-radius: 8px;
  height: 28px;
  font-size: 16px;
  padding: 15px;
  font-family: Roboto;
`;

export const InputLabel = styled.label`
  color: #616161;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 8px;
`;
