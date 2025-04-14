const db = require('../dataBase/connection');

module.exports = {
    async listarFuncao(request, response) {

        try {
        const {idFuncao, nomeFuncao} = request.body;
        
        const sql = 'INSERT INTO funcao (ID_Funcao, NM_Funcao) VALUES (?, ?); ';

        const values = [idFuncao, int()]
    }
}