// types.ts

export interface Establishment {
  id: number;
  name: string;
  cnpj: string;
  address: string;
  description?: string;
  phone?: string;
  mobile?: string;
  cep: string;
  email?: string;
  category: string;
}
