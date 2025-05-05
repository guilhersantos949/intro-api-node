const express = require('express');
const router = express.Router();

const FuncaoControler = require('../controllers/funcao');
const UsuarioControler = require('../controllers/usuario');

router.get('/funcao', FuncaoControler.listarFuncao);
router.get('/usuario', UsuarioControler.listarUsuario);

module.exports = router;
