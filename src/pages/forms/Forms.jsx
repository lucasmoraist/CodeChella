import React, { useState } from 'react';
import { DivForm } from './Style';
import '../../index.css';
import Ingresso from '../ingresso/Ingresso';
import Input from '../../components/input/Input';
import { DropDiaFestival, DropIngresso } from '../../components/dropIngresso/DropIngresso';
import { apiPessoa, apiIngresso } from '../../actions/ConnectApi';

const Forms = () => {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [setor, setSetor] = useState('');
    const [dtNasc, setDtNasc] = useState('');
    const [diaFestival, setDiaFestival] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [enviado, setEnviado] = useState(false);
    const [user, setUser] = useState()
    const [ingresso, setIngresso] = useState()

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            apiPessoa
                .post("http://localhost:8050/api/pessoa", {
                    nome: user.nome,
                    email: user.email,
                    cpf: user.cpf,
                    dtNasc: user.dtNasc
                })
                .then((response)=>{setUser(response.data)})
                .catch((err)=>{
                    console.log(`Erro ao fazer conexão ${err}`);
                    setMensagem('Erro ao fazer conexão')
                })
            
        } catch (error) {
            setMensagem('Erro ao enviar os dados pessoais. Tente novamente.');
        }

        try {
            apiIngresso
                .post("http://localhost:8050/api/ingresso", {
                    diaFestival: ingresso.diaFestival,
                    setor: ingresso.setor,
                    pessoa: {
                        id: user.id
                    }
                })
                .then((response)=>{setIngresso(response.data)})
                .catch((err)=>{
                    console.log(`Erro ao fazer conexão ${err}`);
                    setMensagem('Erro ao fazer conexão')
                })
            
        } catch (error) {
            setMensagem('Erro ao enviar os dados do ingresso. Tente novamente.');
        }

        if(apiPessoa && apiIngresso){
            setEnviado(true)
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
                    </div>

                    <div>
                        <label>Data de Nascimento:</label>
                        <Input tipo={"date"} value={dtNasc} setValue={setDtNasc} />

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