const express = require('express');
const mongoose = require('mongoose');
const server = express();
require('dotenv').config();

const ProdutoRoute = require('./routes/ProdutoRoute');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger.json');

// Middlewares
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// Rotas
server.use('/api/produtos', ProdutoRoute); 
server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile)); 


const mongoUri = 'mongodb+srv://Gustavo:P5TQ5TwgnE4KVr8@trabapi.x5mn59x.mongodb.net/?retryWrites=true&w=majority&appName=TrabApi';

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Conectado ao MongoDB');
  server.listen(process.env.PORT || 3000, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT || 3000}`);
    console.log(mongoUri);
  });
})
.catch((err) => {
  console.log('Erro ao conectar no MongoDB:', err);
});
