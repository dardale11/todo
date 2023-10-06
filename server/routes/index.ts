import { Application } from 'express';
import notesRouter from '../routes/api/notesRoute';

// configur efunction for all the routes

const configureRoutes = (app: Application) => {
  app.use('/api/notes', notesRouter);
  app.use('/', (_req, res) => {
    res.status(200).send('TODO!');
  });
};

export default configureRoutes;
