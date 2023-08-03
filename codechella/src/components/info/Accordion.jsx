import React from "react";
import { Accordion, AccordionItem as Item } from '@szhsin/react-accordion';
import arrowDrop from "../../assets/arrow_drop_down@2x.svg";
import styled from "styled-components";

const AccordionItem = ({ header, ...rest }) => (
    <Item
        {...rest}
        header={
            <>
                {header}
                <img className={"arrow"} src={arrowDrop} alt="Chevron Down" />
            </>
        }
        className={"item"}
        buttonProps={{
            className: ({ isEnter }) =>
                `${isEnter && "itemBtnExpanded"}`
        }}
        contentProps={{ className: "itemContent" }}
    />
);

export default function Faq() {
    return (
        <DivFaq>
            <Accordion transition transitionTimeout={100}>
                <AccordionItem header="Quais serão as atrações?" initialEntered>
                    <p className="conteudo">Teremos dois dias de shows, o primeiro (11/03) com bandas de rock, e o segundo (12/03) com bandas
                        pop. <span>Confira o line-up em detalhes clicando neste link!</span></p>
                </AccordionItem>

                <AccordionItem header="Qual a classificação etária?" initialEntered>
                    <p className="conteudo">A classificação etária do evento é 16 (dezesseis) anos.</p>
                </AccordionItem>

                <AccordionItem header="Quais são os setores disponíveis?" initialEntered>
                    <ul className="conteudo">
                        <li>Pista Premium</li>
                        <li>Pista Comum</li>
                        <li>Cadeiras Térreo</li>
                        <li>Cadeiras Superiores</li>
                    </ul>
                </AccordionItem>

                <AccordionItem header="Quais são os itens proibidos?" initialEntered>
                    <ol className="conteudo">
                        <li>garrafas de qualquer gênero, tamanho ou material (exemplos: garrafas de água mineral,
                            “squeezes”, etc), exceto garrafas plásticas para consumo de água, desde que sem tampa. A
                            tampa poderá ser retirada pela segurança na entrada ou em qualquer local do evento (vide
                            item 7 sobre bebedouros);</li>
                        <li>embalagens rígidas e com tampa (exemplo: potes de plásticos do tipo “tupperware”);</li>
                        <li>copos térmicos, de vidro ou metal </li>
                        <li>latas;</li>
                        <li>capacetes;</li>
                        <li>armas de fogo ou armas brancas de qualquer tipo (facas, soco inglês, canivetes, etc);
                        </li>
                        <li>cadeiras/banquinhos;
                        </li>
                        <li>guarda-chuvas;
                        </li>
                        <li>objetos pontiagudos;
                        </li>
                        <li>objetos perfurantes ou cortantes (tesoura, estiletes, pinças, cortadores de unha,
                            saca-rolhas);
                        </li>
                        <li>fogos de artificio, dispositivos explosivos, sinalizadores e aparatos incendiários de
                            qualquer espécie;
                        </li>
                        <li>objetos de vidro, plástico ou metal (perfumes, cosméticos, inclusive desodorantes de
                            qualquer tipo, pasta ou escova de dente);
                        </li>
                        <li>Substâncias inflamáveis, corrosivas
                        </li>
                        <li>sprays
                        </li>
                        <li>máquinas de incapacitação neuromuscular (tasers)
                        </li>
                        <li>ponteiros de laser, luzes estroboscópicas ou outros dispositivos emissores de luz
                        </li>
                        <li>bebidas (em qualquer tipo de recipiente);
                        </li>
                        <li>skate, bicicleta ou qualquer tipo de veículo motorizado ou não;
                        </li>
                        <li>isopor, cooler ou qualquer tipo de utensílio para armazenagem;
                        </li>
                        <li>bastão de selfie (extensor para tirar auto-retrato);
                        </li>
                        <li>câmeras fotográficas ou filmadoras profissionais ou com lente destacável
                        </li>
                        <li>objetos profissionais para captura de imagem e som, como, por exemplo: máquinas fotográficas
                            profissionais (lente intercambiável), equipamentos de filmagem profissionais drones ou
                            outros objetos voadores
                        </li>
                        <li>itens que possam ser utilizados para marketing de emboscada;
                        </li>
                        <li>substâncias venenosas e/ou tóxicas, incluindo drogas ilegais;
                        </li>
                        <li>bandeiras ou cartazes contendo mensagens ou símbolos com divulgações comerciais ou ainda com
                            referências a causas discriminatórias, ofensivas, homofóbicas, racistas ou xenófobas (F1);
                        </li>
                        <li>drones, também denominados VANT (veículo aéreo não tripulado), RPA (Remotely-Piloted
                            Aircraft), Aeronave Remotamente Pilotada, e equipamentos similares.
                        </li>
                        <li>alimentos que representem intuito de comercialização ou que possam representar riscos à
                            segurança.
                        </li>
                    </ol>
                </AccordionItem>

                <AccordionItem header="Quais são os itens permitidos?" initialEntered>
                    <ol className="conteudo">
                        <li>alimentos industrializados devidamente lacrados (exemplos: biscoitos, torradas, barras de
                            cereal etc.);
                        </li>
                        <li>frutas cortadas e acondicionadas em embalagem transparente e não rígida, do tipo “Zip Lock”;
                        </li>
                        <li>sanduiches acondicionados em embalagem transparente e não rígida, do tipo “Zip Lock”.
                        </li>
                    </ol>
                </AccordionItem>
            </Accordion>
        </DivFaq>
    )
}

const DivFaq = styled.div`
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
@media screen and (min-width: 1200px){
    width: 996px; 
    button{
        width: 996px
        font-size: 32px;
    }
}

@media screen and (min-width: 760px) and (max-width: 1278px){
    width: 648px;

    button{
        width: 648px
        font-size: 32px;
    }
}

@media screen and (min-width: 359px) and (max-width: 759px){
    width: 312px;
    button{
        width: 312px;
        font-size: 24px;
    }
}

      

    .arrow {
        margin-left: auto;
        transition: transform 0.25s cubic-bezier(0, 0, 0, 1);
    }

    .item{
        margin-bottom: 8px;
    }

    .itemContent {
        transition: height 0.25s cubic-bezier(0, 0, 0, 1);
    }

    .itemBtnExpanded .arrow {
        transform: rotate(180deg);
        
    }

    li{
        margin: 0 20px;
    }

    .conteudo{
        background-color: #C8DEEF;
        font-size: 20px;
        color: var(--cor-escura);
        font-family: var(--raleway-font);
        font-style: normal;
        font-weight: 500;
        line-height: 40px;
        padding: 16px;
    }

    .conteudo span{
        text-decoration: underline;
    }

    button{
        border: none;
        display: flex;
        padding: 16px;
        justify-content: space-between;
        align-items: center;    
        background-color: var(--cor-primaria);

        color: var(--cor-clara);
        text-align: center;
        font-family: var(--raleway-font);
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

`