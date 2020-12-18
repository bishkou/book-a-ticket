import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';

import {currentUser, errorHandler} from '@chticket/common';
import { NotFoundError } from '@chticket/common';
import {createNewTicket} from "./routes/new";

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV != 'test'
  })
);

app.use(currentUser)

app.use(createNewTicket);

app.all('*', async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
