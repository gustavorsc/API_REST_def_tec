const express = require('express');
const mongoose = require('mongoose');
const server = express();
require('dotenv').config();

const ProdutoRoute = require('../routes/ProdutoRoute');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger.json');

// Middlewares
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// Rotas
server.use('/api/produtos', ProdutoRoute); 
server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile)); 

// Conexão com MongoDB Atlas usando variáveis do .env
const DB_USER = process.env.DB_USER || 'Gustavo';
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD || 'Gugu1409@');
const DB_NAME = process.env.DB_NAME || 'APITrabalho';

const mongoUri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apitrabalho.uc2yywz.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=APITrabalho`;

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Conectado ao MongoDB');
  server.listen(process.env.PORT || 3000, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT || 3000}`);
  });
})
.catch((err) => {
  console.log('Erro ao conectar no MongoDB:', err);
});
