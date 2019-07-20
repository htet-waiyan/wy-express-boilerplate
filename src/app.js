import express from 'express';
import bodyParser from 'body-parser';
import config from './config';
import router from './router';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(config.apiRoot, router);

export default app;
