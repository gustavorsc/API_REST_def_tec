# API REST - Loja Franca

Esta é uma API RESTful construída com **Node.js**, **Express** e **MongoDB Atlas** para o gerenciamento de produtos de uma loja. Documentada com **Swagger** e implantada na **Vercel**.

## 🔗 Link da API (Vercel)
Acesse: [https://api-rest-def-tec.onrender.com/api-docs](https://api-rest-def-tec.onrender.com/api-docs)

## 🚀 Funcionalidades da API

- Criar um novo produto
- Listar todos os produtos
- Buscar produto por ID ou nome
- Atualizar um produto existente
- Deletar um produto

## 🧪 Como testar

Use ferramentas como [Postman](https://www.postman.com/) para testar os seguintes endpoints:

### 🔍 Listar todos os produtos
```http
GET /api/produtos
```

### 🔎 Buscar produto por ID ou nome
```http
GET /api/produtos/:param
```

### ➕ Criar um novo produto
```http
POST /api/produtos
Content-Type: application/json

{
  "nome": "Tênis",
  "descricao": "Tênis esportivo confortável",
  "cor": "Branco",
  "peso": 1.0,
  "tipo": "Calçado",
  "preco": 199.99
}
```

### ✏️ Atualizar um produto
```http
PUT /api/produtos/:id
```

### ❌ Deletar um produto
```http
DELETE /api/produtos/:id
```

## 📦 Instalação local

```bash
git clone https://github.com/gustavorsc/API_REST_def_tec.git
cd API_REST_def_tec
npm install
npm run dev
```

Crie um arquivo `.env` com as seguintes variáveis:

```
MONGO_URI= mongodb+srv://Gustavo:P5TQ5TwgnE4KVr8@trabapi.x5mn59x.mongodb.net/?retryWrites=true&w=majority&appName=TrabApi
PORT=3000
```

## 📄 Documentação Swagger

Acesse a documentação Swagger na rota:
https://api-rest-def-tec.onrender.com/api-docs


Feito com 💻 por Gustavo Soares
