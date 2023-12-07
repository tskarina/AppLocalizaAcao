import { Request, Response } from 'express';
import { establishmentRepository } from '../repositories/establishmentRepository';
import { Like } from 'typeorm';

export class EstablishmentController {
  async create(req: Request, res: Response) {
    const {
      name,
      cnpj,
      address,
      description,
      phone,
      mobile,
      cep,
      email,
      category,
    } = req.body;

    try {
      const newEstablishment = establishmentRepository.create({
        name,
        cnpj,
        address,
        description,
        phone,
        mobile,
        cep,
        email,
        category,
      });
      await establishmentRepository.save(newEstablishment);
      return res.status(201).json(newEstablishment);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async list(req: Request, res: Response) {
    try {
      const searchTerm = req.query.busca as string;

      let establishments;

      if (searchTerm) {
        establishments = await establishmentRepository.find({
          where: [
            { name: Like(`%${searchTerm}%`) }, // Busca por nome
            { address: Like(`%${searchTerm}%`) }, // Busca por endereço
          ],
        });
      } else {
        establishments = await establishmentRepository.find();
      }

      return res.json(establishments);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async searchByAddress(req: Request, res: Response) {
    try {
      const address = req.query.address as string;

      if (!address) {
        return res.status(400).json({ message: 'Endereço não fornecido' });
      }

      const establishment = await establishmentRepository.findOne({
        where: { address },
      });

      if (!establishment) {
        return res
          .status(404)
          .json({ message: 'Estabelecimento não encontrado' });
      }

      return res.json(establishment);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}
