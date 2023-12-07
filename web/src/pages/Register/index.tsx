import React, { useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {
  Container,
  RegisterContainer,
  RegisterTitle,
  RegisterSubTitle,
  Button,
  ButtonContainer,
  InputPassword,
  ErrorMsg,
  InputText,
  BackButton,
  BackButtonImage,
} from './styles';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    if (confirmPassword !== '' && newPassword !== confirmPassword) {
      setErrorMessage('As senhas não coincidem. Por favor, tente novamente.');
    } else if (newPassword.length < 6) {
      setErrorMessage('A senha deve ter pelo menos 6 caracteres.');
    } else {
      setErrorMessage('');
    }
  };

  const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);

    if (password !== '' && password !== newConfirmPassword) {
      setErrorMessage('As senhas não coincidem. Por favor, tente novamente.');
    } else {
      setErrorMessage('');
    }
  };

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      setErrorMessage('As senhas não coincidem. Por favor, tente novamente.');
    } else {
      try {
        const response = await axios.post('http://localhost:3001/user', {
          name,
          email,
          password,
        });

        if (response.status === 201) {
          setErrorMessage('');
        } else {
          console.error('Falha no registro:', response.data.message);
          setErrorMessage('Erro durante o registro. Tente novamente.');
        }
      } catch (error) {
        console.error('Erro durante a requisição:', error);

        setErrorMessage('Erro de rede. Tente novamente mais tarde.');
      }
    }
  };

  return (
    <Container>
      <RegisterContainer>
        <Link to="/new">
          <BackButton>
            <BackButtonImage src="foto-button.svg" alt="Back Button" />
          </BackButton>
        </Link>
        <RegisterTitle>Cadastro do estabelecimento doador</RegisterTitle>
        <RegisterSubTitle>Criar conta</RegisterSubTitle>

        <InputText>Digite o nome do seu estabelecimento</InputText>
        <InputPassword
          className={name !== '' ? 'has-val input' : 'input'}
          type="text"
          value={name}
          onChange={handleNameChange}
        />

        <InputText>Digite seu e-mail</InputText>
        <InputPassword
          className={email !== '' ? 'has-val input' : 'input'}
          type="email"
          value={email}
          onChange={handleEmailChange}
        />

        <InputText>Digite uma senha </InputText>
        <InputPassword
          className={password !== '' ? 'has-val input' : 'input'}
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />

        <InputText>Confirme a senha</InputText>
        <InputPassword
          className={confirmPassword !== '' ? 'has-val input' : 'input'}
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />

        <ErrorMsg>
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </ErrorMsg>

        <ButtonContainer>
          <Link to="/final">
            <Button
              onClick={handleRegister}
              disabled={password !== confirmPassword || password.length < 6}
            >
              Finalizar cadastro
            </Button>
          </Link>
        </ButtonContainer>
      </RegisterContainer>
    </Container>
  );
}
