import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.background};
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  padding: 0px;
  cursor: pointer;
`;

export const BackButtonContainer = styled.div`
  top: 20px;
  left: 20px;
  z-index: 2;
`;

export const BackButtonImage = styled.img`
  width: 12px;
  height: 24px;
  right: 30px;
  margin-bottom: -210px;
  margin-right: 770px;
`;

export const Form = styled.form`
  width: 40vw;
  background-color: ${props => props.theme.white};
  padding: 50px;
  margin-top: 40px;
  border-radius: 8px;
  @media (max-width: 1024px) {
    width: 70vw;
  }
`;

export const FormTitle = styled.h2`
  color: ${props => props.theme.primary};
  font-family: Roboto;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 46px;
  margin-top: 70px;
`;

export const Section = styled.p`
  color: ${props => props.theme.primary};
  font-size: 24px;
  font-family: Roboto;
  margin-top: 40px;
  margin-bottom: 32px;
  font-weight: 700;
`;

export const InputContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
`;

export const Input = styled.input`
  width: 100%;
  &.align-right {
    justify-self: end;
  }
`;

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(186.6px, 1fr));
  gap: 25px 10px;
  justify-content: center;
  align-content: space-between;
`;

export const CategoryBox = styled.div<{ isActive: boolean }>`
  background-color: ${props =>
    props.isActive ? props.theme.white : props.theme.background};

  border: ${props =>
    props.isActive ? `2px solid ${props.theme.background}` : 'none'};

  border-radius: 8px;
  width: 210px;
  height: 180px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 10px;
  cursor: pointer;
`;

export const CategoryImage = styled.img`
  width: 63.717px;
  height: 56px;
`;

export const ButtonContainer = styled.div`
  text-align: center;
  padding-top: 20px;
`;

export const Button = styled.button`
  color: var(--Blocos, #fff);
  text-align: center;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: 186px;
  height: 56px;
  border-radius: 8px;
  border: none;
  background: #2192ab;
  margin-left: 492px;
  margin-top: 30px;

  &:hover {
    background-color: ${props => props.theme.primary}99;
  }
`;

export const SubTitle = styled.div`
  color: #6c6c80;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 24px;
  margin-top: 10px;
`;
