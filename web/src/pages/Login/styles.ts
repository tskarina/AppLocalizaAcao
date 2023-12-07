import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  background: rgba(219, 221, 221, 0.33);
  height: 100vh;
`;

export const LoginContainer = styled.div`
  background-color: white;
  text-align: center;
  padding: 20px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 736px;
  height: 669px;
`;

export const LoginTitle = styled.h2`
  color: #2192ab;
  font-family: Roboto;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 46px;
  text-align: left;
  margin-top: 90px;
  margin-left: 69px;
  margin-bottom: 45px;
`;

export const InputText = styled.div`
  color: #616161;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: left;
  margin-left: 69px;
`;

export const InputPassword = styled.input`
  width: 608px;
  height: 56px;
  border-radius: 8px;
  border: none;
  background: #f6f6f6;
  margin-top: 8px;
  margin-bottom: 10px;
  font-size: 16px;
`;

export const ButtonContainer = styled.div`
  margin-top: 50px;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  width: 613px;
  height: 56px;
  background: #2192ab;
  border: none;
  border-radius: 8px;
  color: #fff;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  cursor: pointer;
`;

export const ErrorMsg = styled.div`
  color: #ff0000;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: left;
  margin-top: 10px;
`;

export const LinkStyled = styled(Link)`
  color: #616161;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-right: 450px;
  &:hover {
    color: #2192ab;
    text-decoration: underline;
  }
`;

export const CadastreLink = styled.span`
  color: #616161;

  margin-right: -20px;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  padding: 0px;
  cursor: pointer;
`;

export const BackButtonImage = styled.img`
  width: 12px;
  height: 24px;
  right: 30px;
  margin-bottom: -100px;
  margin-right: 684px;
`;
