import 'reflect-metadata';

import express from 'express';
import routes from '../../../routes';

const app = express();

app.get('/', (req, res) => res.json({ message: 'Hello world' }));

app.listen(3333, () => {
  console.log('Server started on 3333!');
});
