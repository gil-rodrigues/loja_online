import { getRepository } from 'typeorm';
import User from '../entities/User';

const UsersRepository = getRepository(User);

export default UsersRepository;
