import { useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {
  Container,
  BackButton,
  BackButtonImage,
  LoginContainer,
  LoginTitle,
  InputText,
  InputPassword,
  Button,
  ButtonContainer,
  ErrorMsg,
  LinkStyled,
  CadastreLink,
} from './styles';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3001/login', {
        email,
        password,
      });

      if (response.status === 200) {
        setErrorMessage('');
        window.location.href = '/search-results';
      } else {
        setErrorMessage('Credenciais inválidas. Por favor, tente novamente.');
      }
    } catch (error) {
      console.error('Erro durante a requisição:', error);
      setErrorMessage('E-mail ou senha inválidos');
    }
  };

  return (
    <Container>
      <LoginContainer>
        <Link to="/ewfia">
          <BackButton>
            <BackButtonImage
              src="foto-button.svg"
              alt="Back Button"
            ></BackButtonImage>
          </BackButton>
        </Link>
        <LoginTitle>Login</LoginTitle>

        <InputText>Digite e-mail do login</InputText>
        <InputPassword type="text" value={email} onChange={handleEmailChange} />

        <InputText>Digite sua senha</InputText>
        <InputPassword
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />

        <ErrorMsg>
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </ErrorMsg>

        <LinkStyled to="/forgot-password">Esqueci minha senha</LinkStyled>

        <ButtonContainer>
          <Button
            onClick={handleLogin}
            disabled={email === '' || password === ''}
          >
            Entrar
          </Button>
        </ButtonContainer>

        <CadastreLink>
          É Novo aqui?
          <LinkStyled to="/register"> Cadastre-se</LinkStyled>
        </CadastreLink>
      </LoginContainer>
    </Container>
  );
}
