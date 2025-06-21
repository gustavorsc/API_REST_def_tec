const router = require('express').Router();
const Produto = require('../models/Produto');

// CREATE – Cadastrar produto
router.post('/', (req, res) => {
    const { nome, descricao, cor, peso, tipo, preco } = req.body;

    if (!nome || !descricao || !cor || !peso || !tipo || !preco) {
        return res.status(422).json({
            error: 'Preencha todos os campos obrigatórios.'
        });
    }

    Produto.create({ nome, descricao, cor, peso, tipo, preco })
        .then(() => res.status(201).json({ message: 'Produto cadastrado com sucesso!' }))
        .catch(error => res.status(500).json({ error: error.message }));
});

// READ – Buscar todos os produtos
router.get('/', (req, res) => {
    Produto.find()
        .then(produtos => res.status(200).json(produtos))
        .catch(error => res.status(500).json({ error: error.message }));
});

// READ – Buscar por ID ou Nome
router.get('/:param', (req, res) => {
    const { param } = req.params;

    Produto.findOne({
        $or: [{ _id: param }, { nome: param }]
    })
        .then(produto => {
            if (!produto) {
                return res.status(404).json({ message: 'Produto não encontrado.' });
            }
            res.status(200).json(produto);
        })
        .catch(error => res.status(500).json({ error: error.message }));
});

// UPDATE – Atualizar produto
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const dadosAtualizados = req.body;

    Produto.findByIdAndUpdate(id, dadosAtualizados, { new: true })
        .then(produto => {
            if (!produto) {
                return res.status(404).json({ error: 'Produto não encontrado.' });
            }
            res.status(200).json(produto);
        })
        .catch(error => res.status(500).json({ error: error.message }));
});

// DELETE – Remover produto
router.delete('/:id', (req, res) => {
    const { id } = req.params;

    Produto.findByIdAndDelete(id)
        .then(produto => {
            if (!produto) {
                return res.status(404).json({ error: 'Produto não encontrado.' });
            }
            res.status(200).json({ message: 'Produto removido com sucesso.' });
        })
        .catch(error => res.status(500).json({ error: error.message }));
});

module.exports = router;
