import {
  Container,
  Title,
  Button,
  LeftContainer,
  RightContainer,
  SubTitle,
  SecondSubtitle,
  Logo,
  Foto1,
  Foto2,
  Foto3,
  FotosContainer,
  Header,
  StyledLink,
} from './styles';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <Container>
      <LeftContainer>
        <Title>
          {' '}
          <span>localiz</span>
          <span className="action">Ação</span>
          <Logo />
        </Title>

        <SubTitle>
          Mapeando e conectando esperança. Um app ponte para a solidariedade.{' '}
        </SubTitle>

        <SecondSubtitle>
          {' '}
          <a href="/">Saiba mais</a> sobre nosso projeto
        </SecondSubtitle>

        <Link to="/new">
          <Button>Cadastre um ponto de doação</Button>
        </Link>
      </LeftContainer>

      <RightContainer>
        <Header>
          <StyledLink href="/">
            Quem Somos <span>|</span>
          </StyledLink>
          <StyledLink href="/">
            Seja um parceiro <span>|</span>
          </StyledLink>
          <StyledLink href="/login">Entrar </StyledLink>
        </Header>
        <Foto1 src="foto1.svg" alt="Foto 1" />
        <FotosContainer>
          <Foto2 src="foto2.svg" alt="Foto 2" />
          <Foto3 src="foto3.svg" alt="Foto 3" />
        </FotosContainer>
      </RightContainer>
    </Container>
  );
}
