import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  DetailContainer,
  DetailTitle,
  DetailField,
  DetailSubTitle,
  Button,
  CheckboxContainer,
  CheckboxInput,
  CheckboxText,
  ButtonContainer,
  Container,
  Span,
  InformationContainer,
  BackButton,
  BackButtonImage,
} from './styles';
import { Link } from 'react-router-dom';

interface DetailProps {
  name: string;
  cnpj: string;
  address: string;
  description: string;
  phone: string;
  mobile: string;
  cep: string;
  email: string;
  category?: string;
}

export default function Detail(): JSX.Element {
  const location = useLocation();
  const formValues: DetailProps = location.state;
  const [categoryLabel] = useState<string>('');
  const [confirmationChecked, setConfirmationChecked] =
    useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {};

    fetchData();
  }, [formValues.category, formValues.cnpj]);

  return (
    <Container>
      <DetailContainer>
        <Link to="/new">
          <BackButton>
            <BackButtonImage
              src="foto-button.svg"
              alt="Back Button"
            ></BackButtonImage>
          </BackButton>
        </Link>
        <DetailTitle>Cadastro do estabelecimento doador </DetailTitle>
        <DetailSubTitle>Resumo do cadastro</DetailSubTitle>
        <InformationContainer>
          <DetailField>
            Nome do estabelecimento: <Span>{formValues.name}</Span>
          </DetailField>
          <DetailField>
            CNPJ: <Span>{formValues.cnpj}</Span>
          </DetailField>
          <DetailField>
            Endereço: <Span>{formValues.address}</Span>
          </DetailField>
          <DetailField>
            Celular: <Span>{formValues.mobile}</Span>
          </DetailField>
          {formValues.category && (
            <DetailField>
              Categoria: <Span>{categoryLabel}</Span>
            </DetailField>
          )}
          <DetailField>
            E-mail: <Span>{formValues.email}</Span>
          </DetailField>
        </InformationContainer>
        <CheckboxContainer>
          <CheckboxInput
            type="checkbox"
            checked={confirmationChecked}
            onChange={() => setConfirmationChecked(!confirmationChecked)}
          />
          <CheckboxText>
            Declaro que as informações acima prestadas são verdadeiras.
          </CheckboxText>
        </CheckboxContainer>
        <ButtonContainer>
          <Link to="/register">
            <Button disabled={!confirmationChecked}>Continuar</Button>
          </Link>
        </ButtonContainer>
      </DetailContainer>
    </Container>
  );
}
