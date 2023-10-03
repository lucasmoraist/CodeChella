import React from "react";

import './footer.css';

import LogoCinza from '../../assets/Tema-Verão/Logos/Logo cinza.png';
import Whats from '../../assets/Tema-Verão/Ícones/Ícone whatsapp.png';
import Insta from '../../assets/Tema-Verão/Ícones/Ícone instagram.png';
import Twitter from '../../assets/Tema-Verão/Ícones/Ícone twitter.png'
import Twitch from '../../assets/Tema-Verão/Ícones/Ícone Twitch.png'

export default function Footer(){
    return(
        <footer id="rodape">
            <div>
                <img src={LogoCinza} alt="Logo cinza do evento" width={"233.905px"}/>
                <p>Acesse nossas redes:</p>

                <div id="redes">
                    <img src={Whats} alt="Logo do Whatsapp" width={"32px"}/>
                    <img src={Twitch} alt="Logo do Twitch" width={"32px"}/>
                    <img src={Insta} alt="Logo do Instagram" width={"32px"}/>
                    <img src={Twitter} alt="Logo do Twitter" width={"32px"}/>
                </div>
            </div>

            <div id="criador">
                <p>&copy; Lucas de Morais N Taguchi, 2023</p>
                <p>Projeto fictício</p>
            </div>
        </footer>
    )
}