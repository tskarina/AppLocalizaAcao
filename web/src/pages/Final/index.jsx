import {
  FinalContainer,
  FinalTitle,
  Button,
  ButtonContainer,
  Container,
  Text,
  BackButton,
  BackButtonImage,
  ImageConfirm,
} from './styles';
import { Link } from 'react-router-dom';

export default function Final() {
  return (
    <Container>
      <FinalContainer>
        <Link to="/Register">
          <BackButton>
            <BackButtonImage
              src="foto-button.svg"
              alt="Back Button"
            ></BackButtonImage>
          </BackButton>
        </Link>
        <ImageConfirm src="confirm.svg"></ImageConfirm>
        <FinalTitle>Cadastro Concluído com sucesso!</FinalTitle>
        <Text>
          Agora só aguardar o retorno da nossa equipe através do e-mail
          cadastrado para mais informações. O prazo é de até 48horas.
        </Text>

        <ButtonContainer>
          <Link to="/login">
            <Button>Ok, entendi</Button>
          </Link>
        </ButtonContainer>
      </FinalContainer>
    </Container>
  );
}
