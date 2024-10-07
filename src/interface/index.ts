import express from 'express';
import { configureDependencies } from '../infrastructure/utils/config';
import { connectDB } from '../infrastructure/database/mongo-db/connection'

export const app = express();
connectDB();
app.use(express.json());


const { dancerController } = configureDependencies();
app.post('/dancer', (req, res) => dancerController.create(req, res));
app.get('/dancers', (req, res) => dancerController.listAll(req, res));
app.patch('/dancer/:id', (req, res) => dancerController.update(req, res));
app.delete('/dancer/:id', (req, res) => dancerController.delete(req, res));


if (require.main === module) {
  const PORT = 3333;
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}
