import React from "react";
import { Link } from 'react-router-dom';
import FotoEvento from '../../../assets/Tema-Verão/Imagens/1 -Imagem homepage1.png'
import IconeIngresso from '../../../assets/Tema-Verão/Ícones/ícone ingresso.png';
import '../home.css';


export default function Secao1() {
    return (
        <>
            <section className="secoes">
                <div id="experiencia">
                    <img id="imagem-homepage1"
                        src={FotoEvento}
                        alt="Foto tirada de um dos eventos do codechella" />

                    <div id="info-experiencia">
                        <h6>&lt; 11 e 12 de Março &gt;<br />
                            Aluródromo de São Paulo</h6>

                        <p>Hora de programar nossa memória com novas lembranças! Uma nova experiência sobre música,
                            linguagens e, claro, tecnologia! Somos um festival diverso, com vários artistas e referências.
                            Divirta-se!</p>

                        <Link to="/ingressos">
                            <button>
                                Comprar Ingresso!
                                <img src={IconeIngresso} id="icone-ingresso"
                                    alt="ícone de um ingresso" />
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}