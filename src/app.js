import express from 'express';
import config from './config';
import router from './router';

const app = express();

app.use(config.apiRoot, router);

export default app;
