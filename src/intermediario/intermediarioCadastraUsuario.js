/*const intermediarioCadastrarUsuario = async (req, res, next) => {
    const { nome, email, senha } = req.body;

    // Verifica se o nome está presente
    if (!nome) {
        return res.status(400).json({ mensagem: 'O campo nome é obrigatório!' });
    }
    //Verifica se o nome tem no mínimo cinco caracteres
    if (nome.length < 5) {
        return res.status(400).json({ mensagem: 'O campo nome deve ter no mínimo cinco caracteres!' });
    }

    // Verifica se o nome é uma string
    if (typeof nome !== 'string') {
        return res.status(400).json({ mensagem: 'O campo nome deve ser uma string!' });
    }

    // Verifica se o email está presente
    if (!email) {
        return res.status(400).json({ mensagem: 'O campo email é obrigatório!' });
    }

    // Verifica se a senha está presente
    if (!senha) {
        return res.status(400).json({ mensagem: 'O campo senha é obrigatório!' });
    }
    // Verifica se a senha contém ao menos um número, um caractere especial e uma letra maiúscula
    const regex = /^(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.*[A-Z])/;
    if (!regex.test(senha)) {
        return res.status(400).json({ mensagem: 'A senha deve conter ao menos um número, um caractere especial e uma letra maiúscula!' });
    }
    //Verifica se a senha tem no mínimo seis dígito
    if (senha.length < 6) {
        return res.status(400).json({ mensagem: 'O campo senha deve ser maior que cinco dígitos!' });
    }

    // Prossegue para o próximo intermediário
    next();
};

module.exports = {
    intermediarioCadastrarUsuario
};
*/