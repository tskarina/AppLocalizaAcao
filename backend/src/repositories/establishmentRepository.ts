import { AppDataSource } from '../data-source';
import { Establishment } from '../entities/Establishment';

export const establishmentRepository =
  AppDataSource.getRepository(Establishment);
