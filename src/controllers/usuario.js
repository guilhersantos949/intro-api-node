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
                dados: error.message
            });
        }
    },

    async createUsuario(request, response) {
        try {
            const { CD_Usuario, Senha, DT_Cadastro, DH_Acesso, DT_Vigencia, SN_Bloqueado, ID_Pessoa } = request.body;
            const usu_ativo = 1;

            const sql = 'INSERT INTO usuario (CD_Usuario, Senha, DT_Cadastro, DH_Acesso, DT_Vigencia, SN_Bloqueado, ID_Pessoa) VALUES (?, ?, ?, ?, ?, ?, ?)';
            const values = [CD_Usuario, Senha, DT_Cadastro, DH_Acesso, DT_Vigencia, SN_Bloqueado, ID_Pessoa];

            const [result] = await db.query(sql, values);

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

            return response.status(201).json({
                sucesso: true,
                mensagem: 'Usuário criado com sucesso.',
                dados
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro ao criar o usuário.',
                dados: error.message
            });
        }
    },

    async updateUsuario(request, response) {
        try {
            const { CD_Usuario, Senha, DT_Cadastro, DH_Acesso, DT_Vigencia, SN_Bloqueado, ID_Pessoa, ID_Usuario } = request.body;

            const sql = 'UPDATE usuario SET CD_Usuario = ?, Senha = ?, DT_Cadastro = ?, DH_Acesso = ?, DT_Vigencia = ?, SN_Bloqueado = ?, ID_Pessoa = ? WHERE ID_Usuario = ?';
            const values = [CD_Usuario, Senha, DT_Cadastro, DH_Acesso, DT_Vigencia, SN_Bloqueado, ID_Pessoa, ID_Usuario];

            const [result] = await db.query(sql, values);

            if (result.affectedRows === 0) {
                return response.status(404).json({
                    sucesso: false,
                    mensagem: `Usuário ${ID_Usuario} não encontrado.`,
                    dados: null
                });
            }

            const dados = {
                CD_Usuario,
                Senha,
                DT_Cadastro,
                DH_Acesso,
                DT_Vigencia,
                SN_Bloqueado,
                ID_Pessoa
            };

            return response.status(200).json({
                sucesso: true,
                mensagem: `Usuário ${ID_Usuario} atualizado com sucesso.`,
                dados
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro ao atualizar o usuário.',
                dados: error.message
            });
        }
    },

    async deleteUsuario(request, response) {
        try {
            const { id } = request.params;
            const sql = 'DELETE FROM usuario WHERE ID_Usuario = ?';
            const values = [id];
            const [result] = await db.query(sql, values);
    
            if (result.affectedRows === 0) {
                return response.status(404).json({
                    sucesso: false,
                    mensagem: `Usuário ${id} não encontrado.`,
                    dados: null
                });
            }
    
            return response.status(200).json({
                sucesso: true,
                mensagem: `Usuário ${id} excluído com sucesso.`,
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro ao excluir o usuário.',
                dados: error.message
            });
        }
    }
};