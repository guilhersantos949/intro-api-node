const express = require('express');
const router = express.Router();

const FuncaoControler = require('../controllers/Listarfuncao');

router.get('/funcao', FuncaoControler.listarFuncao);

module.exports = router;
