const ShowAge = (dtNasc) => {
    const hoje = new Date();
    const nascimento = new Date(dtNasc);
    
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    
    return idade;
};

export { ShowAge };