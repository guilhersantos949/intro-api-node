const db = require('../dataBase/connection');

module.exports = {
    async listarUsuario(request, response) {
        try {
            const sql = 'SELECT ID_Usuario, CD_Usuario, Senha, DT_Cadastro, DH_Acesso, DT_Vigencia, SN_Bloqueado, ID_Pessoa From usuario;';
            const [rows] = await db.query(sql);

            return response.status(200).json({
                sucesso: true,
                mensagem: 'Lista de usuario.',
                itens: rows.length,
                dados: rows
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição',
                dados: error.message // Corrigido aqui
            });
        }
    },

    async createUsuario(request, response){
        try {
            const sql = 'SELECT ID_Usuario, CD_Usuario, Senha, DT_Cadastro, DH_Acesso, DT_Vigencia, SN_Bloqueado, ID_Pessoa From usuario;';

            const [rows] = await db.query(sql);

            return response.status(200).json({
                sucesso: true,
                mensagem: 'Lista de usuario.',
                itens: rows.length,
                dados: rows
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição',
                dados: error.message // Corrigido aqui
            });
        }
    },

    async createUsuario(request, response){
        try{
            const { CD_Usuario, Senha, DT_Cadastro, DH_Acesso, DT_Vigencia, SN_Bloqueado, ID_Pessoa } = request.body;
            const usu_ativo = 1;

            const sql = 'INSERT INTO usuario (CD_Usuario, Senha, DT_Cadastro, DH_Acesso, DT_Vigencia, SN_Bloqueado, ID_Pessoa) VALUES (?, ?, ?, ?, ?, ?, ?)';

            const values = [CD_Usuario, Senha, DT_Cadastro, DH_Acesso, DT_Vigencia, SN_Bloqueado, ID_Pessoa];
            const [rows] = await db.query(sql, values);
            const dados = {
                id: result.insertId,
                CD_Usuario,
                Senha,
                DT_Cadastro,
                DH_Acesso,
                DT_Vigencia,
                SN_Bloqueado,
                ID_Pessoa,
                usu_ativo
            };
            
        }
    }
