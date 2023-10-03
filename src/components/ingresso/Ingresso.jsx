import React from "react";
import QR from '../../assets/Tema-Verão/Ícones/Qr code 1.png';

const ModelIngresso = ({nome, setor}) => {
    return (
        <div id="main">
            <img src={QR} alt='QR code' />

            <div>
                <h6>{nome}</h6>
                <p>Informações</p>
                <p>Setor: {setor}</p>
                <p>Data: 11/04</p>
                <p>Local: São Paulo-SP</p>
            </div>
        </div>
    )
}

export default ModelIngresso;