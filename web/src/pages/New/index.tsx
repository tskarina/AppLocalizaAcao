import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Input from '../../components/Input';
import {
  Button,
  ButtonContainer,
  CategoryBox,
  CategoryContainer,
  CategoryImage,
  Container,
  Form,
  FormTitle,
  Section,
  InputContainer,
  SubTitle,
  BackButtonContainer,
  BackButton,
  BackButtonImage,
} from './styles';
import { categories } from './categories';

export default function New() {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    name: '',
    cnpj: '',
    address: '',
    description: '',
    phone: '',
    mobile: '',
    cep: '',
    email: '',
    category: '',
  });

  useEffect(() => {
    // Você pode adicionar lógica adicional aqui ao carregar a página, se necessário
  }, []);

  async function fetchData(address: string) {
    try {
      const response = await fetch(
        `http://localhost:3001/establishment/search?address=${encodeURIComponent(
          address
        )}`
      );

      if (response.ok) {
        const establishments = await response.json();
        // Faça algo com os resultados, por exemplo, atualizar o estado
        console.log(establishments);
      } else {
        console.error(
          `Erro na requisição: ${response.status} - ${response.statusText}`
        );
      }
    } catch (error) {
      console.error('Erro durante a requisição:', error);
    }
  }

  async function onSubmit() {
    try {
      const request = await fetch('http://localhost:3001/establishment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formValues,
        }),
      });

      if (request.ok) {
        toast('Estabelecimento criado com sucesso!', {
          type: 'success',
          autoClose: 2000,
          onClose: () => {
            navigate('/detail', { state: formValues });
            fetchData(formValues.address); // Chama fetchData após a criação do estabelecimento
            setFormValues({
              name: '',
              cnpj: '',
              address: '',
              description: '',
              phone: '',
              mobile: '',
              cep: '',
              email: '',
              category: '',
            });
          },
        });
      } else {
        console.error(
          `Erro na requisição: ${request.status} - ${request.statusText}`
        );
      }
    } catch (error) {
      console.error('Erro durante a requisição:', error);
    }
  }

  return (
    <Container>
      <BackButtonContainer>
        <Link to="/home">
          <BackButton>
            <BackButtonImage
              src="foto-button.svg"
              alt="Back Button"
            ></BackButtonImage>
          </BackButton>
        </Link>
      </BackButtonContainer>
      <Form
        onSubmit={async ev => {
          ev.preventDefault();
          try {
            await onSubmit();
          } catch (error) {
            console.error('Erro durante o envio do formulário:', error);
          }
        }}
      >
        <FormTitle>Cadastro do estabelecimento doador</FormTitle>

        <Section>Dados</Section>

        <InputContainer>
          <Input
            label="Nome do local"
            name="name"
            value={formValues.name}
            onChange={setFormValues}
            required={true}
          />

          <Input
            label="CNPJ"
            name="cnpj"
            value={formValues.cnpj}
            onChange={setFormValues}
            required={true}
          />
        </InputContainer>

        <Input
          label="Endereço"
          name="address"
          value={formValues.address}
          onChange={setFormValues}
          required={true}
        />

        <Input
          label="Descrição"
          name="description"
          value={formValues.description}
          onChange={setFormValues}
          required={true}
        />

        <InputContainer>
          <Input
            label="Telefone"
            name="phone"
            value={formValues.phone}
            onChange={setFormValues}
            required={true}
          />

          <Input
            label="Celular"
            name="mobile"
            value={formValues.mobile}
            onChange={setFormValues}
            required={true}
          />
        </InputContainer>

        <InputContainer>
          <Input
            label="CEP"
            name="cep"
            value={formValues.cep}
            onChange={setFormValues}
          />

          <Input
            label="E-mail"
            name="email"
            value={formValues.email}
            onChange={setFormValues}
          />
        </InputContainer>

        <Section>Categoria</Section>
        <SubTitle>Selecione a categoria do seu estabelecimento</SubTitle>

        <CategoryContainer>
          {categories.map(category => (
            <CategoryBox
              key={category.key}
              onClick={() => {
                setFormValues(prev => ({ ...prev, category: category.key }));
              }}
              isActive={formValues.category === category.key}
            >
              <CategoryImage src={category.url} />
              {category.label}
            </CategoryBox>
          ))}
        </CategoryContainer>

        <ButtonContainer>
          <Button type="submit">Avançar</Button>
        </ButtonContainer>
      </Form>
    </Container>
  );
}
