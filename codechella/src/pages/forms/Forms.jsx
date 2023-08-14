import React, { useState } from 'react';
import styled from 'styled-components';
import './forms.css'

const Forms = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [setor, setSetor] = useState('');
    const [dtNasc, setDtNasc] = useState('');
    const [erroCPF, setErroCPF] = useState('');
    const [erroIdade, setErroIdade] = useState('');
    const [mensagem, setMensagem] = useState('');

    const validarCPF = (value) => {
        if (value.length !== 11) {
            return false;
        }

        const digits = value.split('').map(Number);
        const [a, b, c, d, e, f, g, h, i, j, k] = digits;

        if (
            a === b &&
            b === c &&
            c === d &&
            d === e &&
            e === f &&
            f === g &&
            g === h &&
            h === i &&
            i === j &&
            j === k
        ) {
            return false;
        }

        let sum = 0;
        for (let i = 0; i < 9; i++) {
            sum += digits[i] * (10 - i);
        }

        let remainder = sum % 11;
        if (remainder < 2) {
            remainder = 0;
        } else {
            remainder = 11 - remainder;
        }

        if (remainder !== digits[9]) {
            return false;
        }

        sum = 0;
        for (let i = 0; i < 10; i++) {
            sum += digits[i] * (11 - i);
        }

        remainder = sum % 11;
        if (remainder < 2) {
            remainder = 0;
        } else {
            remainder = 11 - remainder;
        }

        if (remainder !== digits[10]) {
            return false;
        }

        return true;
    };

    const showAge = (dtNasc) => {
        const hoje = new Date();
        const nascimento = new Date(dtNasc);
        
        let idade = hoje.getFullYear() - nascimento.getFullYear();
        
        return idade;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validarCPF(cpf)) {
            setErroCPF('CPF inválido');
            return;
        } else {
            setErroCPF('');
        }

        const idade = showAge(dtNasc);

        if (idade < 10) {
        setErroIdade('Você deve ter mais de 10 anos para entrar no evento');
        return;
        } else if(idade > 10 && idade < 16){
        setErroIdade('Apenas acompanhado');
        } else{
            setErroIdade('')
        }

        try {
            const response = await fetch('http://localhost:8050/pessoa', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nome,
                    email,
                    cpf,
                    setor,
                    dtNasc,
                }),
            });

            if (response.ok) {
                setMensagem('Dados enviados com sucesso!');
            } else {
                setMensagem('Erro ao enviar os dados. Tente novamente.');
            }
        } catch (error) {
            setMensagem('Erro ao enviar os dados. Tente novamente.');
        }
        
    };

    return (
        <DivForm>
            <div id="reserva">
                <h1>Garanta seu Ingresso</h1>
            </div>
            <div id="main">
                <h3>Preencha o formulário a seguir:</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Nome:</label>
                        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required/>
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    </div>
                    <div>
                        <label>CPF:</label>
                        <input type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} required/>
                        {erroCPF && <p>{erroCPF}</p>}
                    </div>
                    <fieldset>
                        <div>
                            <label>Ingresso:</label>
                            <select value={setor} onChange={(e) => setSetor(e.target.value)}>
                                <option hidden disabled>Tipo de Ingresso</option>
                                <option value="Pista comum">Pista comum</option>
                                <option value="Pista premium">Pista premium</option>
                                <option value="Cadeira inferior">Cadeira inferior</option>
                                <option value="Cadeira superior">Cadeira superior</option>
                            </select>
                        </div>
                        <div>
                            <label>Data de Nascimento:</label>
                            <input
                                type="date"
                                value={dtNasc}
                                onChange={(e) => setDtNasc(e.target.value)}
                                required
                            />
                            {erroIdade && <p>{erroIdade}</p>}

                        </div>
                    </fieldset>
                    <button type="submit">Enviar</button>
                </form>
                <p>{mensagem}</p>
            </div>
        </DivForm>
    );
};

export default Forms;

const DivForm = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Calistoga&family=Raleway:wght@500;700;800&display=swap');

:root {
    /*Váriaveis de fonte*/
    --raleway-font: 'Raleway', sans-serif;
    --caslistoga-font: 'Calistoga', cursive;

    /*Váriaveis de cores*/

    --cor-clara: #fff;
    --cor-escura: #444;
    --cor-primaria: #2E7BA2;
    --cor-secundaria: #DF9010;

}

@media screen and (min-width: 1440px) {
    #main{
        padding: 48px 120px;
    }

    h3{
        font-size: 48px;
    }

    label{
        text-align: center;
    }

    
    form button:hover{
        transition: .4s;
        box-shadow: 4px 4px 0 0 var(--cor-escura);
    }
    
    form button:not(:hover){
        transition: .4s;
    }
}

@media screen and (min-width: 1279px) and (max-width: 1440px) {
    #main{
        padding: 48px 120px;
    }

    h3{
        font-size: 48px;
    }

    label{
        text-align: center;
    }
    
    form button:hover{
        transition: .4s;
        box-shadow: 4px 4px 0 0 var(--cor-escura);
    }
    
    form button:not(:hover){
        transition: .4s;
    }
}

@media screen and (min-width: 760px) and (max-width: 1278px) {
    #main{
        padding: 48px 60px;
    }

    h3{
        font-size: 48px;
    }

    fieldset{
        flex-direction: column;
    }

    label{
        text-align: center;
    }

    form button{
        box-shadow: 4px 4px 0 0 var(--cor-escura);
        cursor: pointer;
    }
}

@media screen and (min-width: 359px) and (max-width: 759px){
    #main{
        padding: 32px 24px;
    }

    h3{
        font-size: 32px;
    }

    fieldset{
        flex-direction: column;
    }
    
    form button{
        display: flex;
        padding: 8px 16px;
        justify-content: center;
        align-items: center;
        gap: 16px;
        border: none;
        border-radius: 16px;
        background-color: var(--cor-primaria);
        box-shadow: 4px 4px 0 0 var(--cor-escura);
        color: var(--cor-clara);
        cursor: pointer;
    }
}

#main{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 48px;
    align-self: stretch;
}

h3{
    color: var(--cor-escura);
    text-align: center;
    font-family: var(--caslistoga-font);
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

form{
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    gap: 32px;
}

form div{
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
}

label{
    color: var(--cor-escura);
    font-family: var(--raleway-font);
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

input{
    width: 100%;
    height: 48px;
    border: none;
    color: var(--cor-escura);
    font-family: var(--raleway-font);
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 40px;
}

select{
    width: 100%;
    height: 48px;
    border: none;
    color: var(--cor-escura);
    font-family: var(--raleway-font);
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 40px;
}

fieldset{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 24px;
    align-self: stretch;
    border: none;
}

form button{
    display: flex;
    padding: 8px 16px;
    justify-content: center;
    align-items: center;
    gap: 16px;
    border: none;
    border-radius: 16px;
    background-color: var(--cor-primaria);
    color: var(--cor-clara);
    cursor: pointer;
}

form button a{
    text-decoration: none;
    color: var(--cor-clara);
}


`