import React, { useState } from 'react';
import { DivForm } from './Style';
import './forms.css'
import Ingresso from '../ingresso/Ingresso';

const Forms = () => {
    
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [setor, setSetor] = useState('');
    const [dtNasc, setDtNasc] = useState('');
    const [erroCPF, setErroCPF] = useState('');
    const [erroIdade, setErroIdade] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [enviado, setEnviado] = useState(false);

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
                setEnviado(true);
            } else {
                setMensagem('Erro ao enviar os dados. Tente novamente.');
            }
        } catch (error) {
            setMensagem('Erro ao enviar os dados. Tente novamente.');
        }
        
    };

    if(enviado){
        return(
            <Ingresso nome={nome} setor={setor}/>
        )
    }


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
                        <input type="text" value={nome} onChange={(e) => {setNome(e.target.value)}} required/>
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="email" value={email} onChange={(e) => {setEmail(e.target.value)}} required/>
                    </div>
                    <div>
                        <label>CPF:</label>
                        <input type="text" value={cpf} onChange={(e) => {setCpf(e.target.value)}} required/>
                        {erroCPF && <p>{erroCPF}</p>}
                    </div>
                    <fieldset>
                        <div>
                            <label>Ingresso:</label>
                            <select value={setor} onChange={(e) => {setSetor(e.target.value)}}>
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
                                onChange={(e) => {setDtNasc(e.target.value)}}
                                required
                            />
                            {erroIdade && <p>{erroIdade}</p>}

                        </div>
                    </fieldset>
                    <button type="submit" >Enviar</button>
                </form>
                <p>{mensagem}</p>
            </div>

        </DivForm>
    );
};

export default Forms;