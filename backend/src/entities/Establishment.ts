import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('establishments')
export class Establishment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'text' }) // Use 'bigint' para armazenar números longos
  cnpj: string;

  @Column({ type: 'text' })
  address: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'text', nullable: true }) // ou use 'integer' dependendo dos requisitos
  phone: string;

  @Column({ type: 'text', nullable: true }) // ou use 'integer' dependendo dos requisitos
  mobile: string;

  @Column({ type: 'text' })
  cep: string;

  @Column({ type: 'text', nullable: true })
  email: string;

  @Column({ type: 'text' })
  category: string;
}
