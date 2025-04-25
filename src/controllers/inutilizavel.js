const db = require('../dataBase/connection');

module.exports = {
    async listarFuncao(request, response) {
        try {
            const sql = 'SELECT ID_Funcao, NM_Funcao FROM funcao;';
            const [rows] = await db.query(sql);

            return response.status(200).json({
                sucesso: true,
                mensagem: 'Lista de funções.',
                itens: rows.length,
                dados: rows
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição',
                dados: error.menssage
            });
        }
    }
}
