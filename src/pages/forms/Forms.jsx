import React, { useState } from 'react';
import { DivForm } from './Style';
import '../../index.css';
import Ingresso from '../ingresso/Ingresso';
import Input from '../../components/input/Input';
import { DropDiaFestival, DropIngresso } from '../../components/dropIngresso/DropIngresso';
import { ValidaCpf } from '../../components/validacao/ValidaCpf';

const Forms = () => {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [setor, setSetor] = useState('');
    const [dtNasc, setDtNasc] = useState('');
    const [diaFestival, setDiaFestival] = useState('');
    const [erroCPF, setErroCPF] = useState('');
    const [erroIdade, setErroIdade] = useState('');
    const [enviado, setEnviado] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!ValidaCpf(cpf)) {
            setErroCPF('CPF inválido');
            return;
        } else {
            setErroCPF('');
        }

        const hoje = new Date();
        const nascimento = new Date(dtNasc);

        let idade = hoje.getFullYear() - nascimento.getFullYear();

        if (idade < 10) {
            setErroIdade('Você deve ter mais de 10 anos para entrar no evento');
            return;
        } else if (idade > 10 && idade < 16) {
            setErroIdade('Apenas acompanhado');
            setTimeout(() => {
                setEnviado(true)
            }, 2000);

        } else {
            setEnviado(true)
            setErroIdade('')
        }
    };

    if (enviado) {
        return (
            <Ingresso nome={nome} setor={setor} dia={diaFestival} />
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
                        <Input tipo={"text"} value={nome} setValue={setNome} />
                    </div>

                    <div>
                        <label>Email:</label>
                        <Input tipo={"email"} value={email} setValue={setEmail} />
                    </div>

                    <div>
                        <label>CPF:</label>
                        <Input tipo={"text"} value={cpf} setValue={setCpf} />
                        {erroCPF && <p>{erroCPF}</p>}
                    </div>

                    <div>
                        <label>Data de Nascimento:</label>
                        <Input tipo={"date"} value={dtNasc} setValue={setDtNasc} />

                        {erroIdade && <p>{erroIdade}</p>}
                    </div>

                    <fieldset>
                        <div>
                            <label>Ingresso:</label>
                            <DropIngresso value={setor} setValue={setSetor} />
                        </div>

                        <div>
                            <label>Dia do Festival</label>
                            <DropDiaFestival value={diaFestival} setValue={setDiaFestival} />
                        </div>
                    </fieldset>

                    <button type="submit" >Enviar</button>
                </form>
            </div>

        </DivForm>
    );
};

export default Forms;