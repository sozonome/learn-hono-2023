import { Hono } from 'hono';
import Content from './Content';

const app = new Hono();

app
  .get('/', (c) => c.text('Hello Hono!'))
  .get('/jsx', (c) => c.html(<Content />));

export default app;
