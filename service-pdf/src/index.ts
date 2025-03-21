import express, { Request, Response } from 'express';
import cors from 'cors';
import path from 'path';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use('/files', express.static(path.join(__dirname, '../../files')));

app.listen(port, '0.0.0.0', () => {
  console.log(`Server listening on port ${port}`);
});
