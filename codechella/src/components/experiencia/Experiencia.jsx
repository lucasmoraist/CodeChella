import React from 'react';
import Experiencia1 from '../../assets/Tema-Verão/Imagens/2 - A experiência1.png';
import Experiencia2 from '../../assets/Tema-Verão/Imagens/2 - A Experiência2.png';
import Experiencia3 from '../../assets/Tema-Verão/Imagens/2 - A Experiência3.png';
import './experiencia.css';

export default function Experiencia() {
    return (
        <>
            <div id='xp'>
                <h1>A Experiência</h1>
            </div>

            <main>
                <section class="inclusao">
                    <img src={Experiencia1}/>
                        <div class="descricao-esquerda">
                            <h6>Acessibilidade e Inclusão</h6>
                            <p>
                                Nosso evento tenta abraçar um público mais amplo em todos os sentidos, de todas as idades, corpos, gostos e pensamentos!
                                Isso está presente no  espaço físico, na sinalização, no treinamento da equipe de apoio, na comunicação em libras, braile,
                                visual e tátil. Além disso, dispomos de ingressos gratuitos para pessoas com deficiência e acompanhantes, pessoas idosas e
                                crianças!
                            </p>
                        </div>
                </section>

                <section class="sustentabiladade">
                    <div class="descricao-direita">
                        <h6>Sustentabilidade</h6>
                        <p>
                            Queremos estar aqui celebrando daqui a 50, 100 anos! Por isso, levamos o futuro do nosso planeta a sério. Nosso festival é
                            carbono zero, com utilização de copos retornáveis, coleta e destinação adequada de resíduos, e transporte coletivo.
                        </p>
                    </div>
                    <img src={Experiencia2}/>
                </section>

                <section class="atracoes">
                    <img src={Experiencia3}/>
                        <div class="descricao-esquerda">
                            <h6>Atrações</h6>
                            <p>
                                Intervenções artísticas e culturais para todos os gostos! Durante os intervalos dos shows, nossa experiência contará com
                                recreação para crianças, oficina de cerâmica, origami, circo e aquarela! Além disso, nosso espaço contra com 3 praças de
                                alimentação, roda gigante e outros brinquedos!
                            </p>
                        </div>
                </section>
            </main>
        </>
    )
}