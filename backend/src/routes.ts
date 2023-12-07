import { Router } from 'express';
import { EstablishmentController } from './controllers/EstablishmentController';
import { UserController } from './controllers/UserController';
import { authMiddleware } from './middlewares/authMiddleware';

const routes = Router();

routes.post('/establishment', new EstablishmentController().create);
routes.get('/establishment/detail', new EstablishmentController().list);
routes.get(
  '/establishment/search',
  new EstablishmentController().searchByAddress
);

routes.post('/user', new UserController().create);
routes.post('/login', new UserController().login);

routes.use(authMiddleware);
routes.get('/profile', new UserController().getProfile);

export default routes;
