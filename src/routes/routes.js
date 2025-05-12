const express = require('express');
const router = express.Router();

const UsuarioControler = require('../controllers/usuario');
router.get('/usuario', UsuarioControler.listarUsuario);
router.post('/usuario', UsuarioControler.createUsuario);
router.patch('/usuario/:id', UsuarioControler.updateUsuario);
router.delete('/usuario/:id', UsuarioControler.deleteUsuario);

module.exports = router;
