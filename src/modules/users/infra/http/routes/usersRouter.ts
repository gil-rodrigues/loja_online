import { Router } from 'express';
import { getRepository } from 'typeorm';
import User from '@modules/users/infra/typeorm/entities/User';

const usersRouter = Router();

usersRouter.get('/', (req, res) => {
  return res.json({ message: 'Hello world' });
});

usersRouter.post('/', async (req, res) => {
  const usersRepository = getRepository(User);
  const user = usersRepository.create({
    name: 'Joao Carlos',
    abbreviated_name: 'Joao',
    phone_number: '232450054',
    email: 'joao@joao.pt',
    password: '1234',
    avatar_url: 'abcd',
    inactive: false
  });

  await usersRepository.save(user);
  return user;
});

export default usersRouter;
