import React, { useState } from 'react';
import { DivForm } from './Style';
import '../../index.css';
import Ingresso from '../ingresso/Ingresso';
import Input from '../../components/input/Input';
import { DropDiaFestival, DropIngresso } from '../../components/dropIngresso/DropIngresso';
import { ValidaCpf } from '../../components/validacao/ValidaCpf';
import { ShowAge } from '../../components/validacao/ValidaIdade';

const Forms = () => {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [setor, setSetor] = useState('');
    const [dtNasc, setDtNasc] = useState('');
    const [diaFestival, setDiaFestival] = useState('');
    const [erroCPF, setErroCPF] = useState('');
    const [erroIdade, setErroIdade] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [enviado, setEnviado] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        
        if (!ValidaCpf(cpf)) {
            setErroCPF('CPF inválido');
            return;
        } else {
            setErroCPF('');
        }
        

        ShowAge(dtNasc, setErroIdade);

        try {
            //const responsePessoa = await fetch('https://api-codechella.azurewebsites.net/api/pessoa', {
            const responsePessoa = await fetch('http://localhost:8050/api/pessoa', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nome,
                    email,
                    cpf,
                    dtNasc,
                }),
            });

            if (responsePessoa.ok) {
                const pessoaData = await responsePessoa.json();
                console.log(pessoaData);
                const id = pessoaData.id;

                //const responseIngresso = await fetch('https://api-codechella.azurewebsites.net/api/ingresso', {
                const responseIngresso = await fetch('http://localhost:8050/api/ingresso', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        diaFestival,
                        setor,
                        pessoa: {
                            id: id,
                        }
                    }),
                })

                if (responseIngresso.ok) {
                    const ingressoData = await responseIngresso.json();
                    console.log('Ingresso criado:', ingressoData);
                } else {
                    console.error('Erro ao criar o ingresso:', responseIngresso.status);
                }

                if (responsePessoa.ok && responseIngresso.ok) {
                    setMensagem('Dados enviados com sucesso!');
                    setEnviado(true);
                } else {
                    setMensagem('Erro ao enviar os dados. Tente novamente.');
                }
            }
        } catch (error) {
            setMensagem('Erro ao enviar os dados. Tente novamente.');
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

                <p>{mensagem}</p>
            </div>

        </DivForm>
    );
};

export default Forms;