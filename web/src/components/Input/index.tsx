// Input.js

import React from 'react';
import { Container, InputStyled, InputLabel } from './styles';

interface InputProps {
  label: string;
  name: string;
  value: string;
  onChange: Function;
  required?: boolean;
}

export default function Input(props: InputProps) {
  return (
    <Container>
      <InputLabel>
        {props.label} {props.required && '*'}
      </InputLabel>
      <InputStyled
        required
        name={props.name}
        value={props.value}
        onChange={ev => {
          props.onChange((prev: any) => ({
            ...prev,
            [props.name]: ev.target.value,
          }));
        }}
      />
    </Container>
  );
}
