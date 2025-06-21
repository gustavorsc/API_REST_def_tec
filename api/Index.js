const express = require('express');
const mongoose = require('mongoose');
const serverless = require('serverless-http');
require('dotenv').config();

const app = express();

const ProdutoRoute = require('../routes/ProdutoRoute');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger.json');

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rotas
app.use('/api/produtos', ProdutoRoute);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

// Conexão com MongoDB Atlas
const DB_USER = process.env.DB_USER || 'Gustavo';
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD || 'Gugu1409@');
const DB_NAME = process.env.DB_NAME || 'APITrabalho';

const mongoUri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apitrabalho.uc2yywz.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=APITrabalho`;

mongoose.connect(mongoUri)
  .then(() => console.log('Conectado ao MongoDB'))
  .catch((err) => console.error('Erro ao conectar no MongoDB:', err));

// Exporta a função para a Vercel
module.exports = app;
module.exports.handler = serverless(app);
