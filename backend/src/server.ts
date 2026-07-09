import cors from 'cors';
import express from 'express';
import auditRoutes from './routes/audit.routes.js';

const app = express();
const port = process.env.PORT ?? 3000;

app.use(cors());
app.use(express.json());
app.use('/api', auditRoutes);

app.get('/health', (_req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});
