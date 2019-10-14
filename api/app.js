import config from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import cors from'cors';

import BiminiRoutes from './server/routes/BiminiRoutes';

config.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const port = process.env.PORT || 8000;

app.use('/api/v1/bimini', BiminiRoutes);

// Catch all route.
app.get('*', (req, res) => res.status(200).send({
   message: 'Welcome to Bimini API.'
}));

app.listen(port, () => {
   console.log(`Server is running on PORT ${port}`);
});

export default app;