import { Request, Response } from 'express';
import { userRepository } from '../repositories/userRepository';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

type JwtPayload = {
  id: number;
};

export class UserController {
  async create(req: Request, res: Response) {
    const { name, email, password } = req.body;

    try {
      const userExists = await userRepository.findOneBy({ email });

      if (userExists) {
        return res.status(400).json({ message: 'Este e-mail já está em uso' });
      }
    } catch (error) {
      console.error(
        'Erro durante a verificação de existência do usuário:',
        error
      );
      return res.status(500).json({ message: 'Erro interno do servidor' });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = userRepository.create({
      name,
      email,
      password: hashPassword,
    });

    await userRepository.save(newUser);

    const { password: _, ...user } = newUser;

    return res.status(201).json(user);
  }

  async login(req: Request, res: Response) {
    const { email, password } = req.body;

    try {
      const user = await userRepository.findOneBy({ email });

      if (!user) {
        return res.status(400).json({ message: 'E-mail ou senha inválidos' });
      }

      const verifyPass = await bcrypt.compare(password, user.password);

      if (!verifyPass) {
        return res.status(400).json({ message: 'E-mail ou senha inválidos' });
      }

      const token = jwt.sign({ id: user.id }, process.env.JWT_PASS ?? '', {
        expiresIn: '8h',
      });
      console.log(token);
      const { password: _, ...userLogin } = user;

      return res.json({
        user: userLogin,
        token: token,
      });
    } catch (error) {
      console.error(
        'Erro durante a verificação de existência do usuário:',
        error
      );
    }
  }
  async getProfile(req: Request, res: Response) {
    return res.json(req.user);
  }
}
