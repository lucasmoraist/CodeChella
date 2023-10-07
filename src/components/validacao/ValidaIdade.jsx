const ShowAge = (dtNasc, setErroIdade) => {
    const hoje = new Date();
    const nascimento = new Date(dtNasc);

    let idade = hoje.getFullYear() - nascimento.getFullYear();

    if (idade < 10) {
        setErroIdade('Você deve ter mais de 10 anos para entrar no evento');
        return;
    } else if (idade > 10 && idade < 16) {
        setErroIdade('Apenas acompanhado');
    } else {
        setErroIdade('')
    }

    return idade;
};

export { ShowAge };