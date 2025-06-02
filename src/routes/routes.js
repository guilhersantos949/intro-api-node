const express = require('express');
const router = express.Router();

const UsuarioControler = require('../controllers/usuario');
router.get('/usuario', UsuarioControler.listarUsuario);
router.post('/usuario', UsuarioControler.createUsuario);
router.patch('/usuario/:ID_Usuario', UsuarioControler.updateUsuario);
router.delete('/usuario/:ID_Usuario', UsuarioControler.deleteUsuario);

module.exports = router;
