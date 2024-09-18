const { usuarios } = require('../bancoDeDados')

const listarUsuario = async (req, res) => {

    return res.json(usuarios)
}

const cadastrarUsuario = async (req, res) => {
    const { nome, email, cpf, senha } = req.body;
    if (!/^\d{11}$/.test(cpf)) {
        return res.status(400).json({ mensagem: 'O CPF deve conter exatamente 11 números.' });
    }

    try {
        const cpfJaCadastrado = usuarios.find(usuario => usuario.cpf === cpf);
        if (cpfJaCadastrado) {
            return res.status(400).json({ mensagem: 'Este CPF já está cadastrado!' });
        }

        const emailJaCadastrado = usuarios.find(usuario => usuario.email === email);

        if (emailJaCadastrado) {
            return res.status(400).json({ mensagem: 'Este e-mail já está cadastrado!' });
        }


        const novoUsuario = {
            nome,
            email,
            cpf,
            senha
        }
        usuarios.push(novoUsuario)
        return res.status(201).json(novoUsuario)
    } catch (error) {
        return res.status(400).json({ mensagem: error.message })
    }
}

module.exports = {
    cadastrarUsuario,
    listarUsuario
}