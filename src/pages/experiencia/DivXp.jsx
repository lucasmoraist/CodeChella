import styled from 'styled-components';

const DivXp = styled.div`
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

@media screen and (min-width: 1441px) {
    main section{
        padding: 64px 120px;
        gap: 48px;
    }

    section img{
        width: 609px;
        height: 381px;
    }

    .descricao-esquerda{
        height: 340px;
        align-items: flex-start;
    }
    .descricao-direita{
        height: 340px;
        align-items: flex-end;
    }

    h6{
        font-size: 32px;
    }
    
    .descricao-esquerda p{
        font-size: 22px;
        line-height: 40px; 
    }
    
    .descricao-direita p{
        font-size: 22px;
        text-align: right;
    }
}

@media screen and (min-width: 1279px) and (max-width: 1440px){
    main section{
        padding: 57px 106px;
        gap: 48px;
    }

    section img{
        width: 609px;
        height: 381px;
    }

    h6{
        font-size: 32px;
    }

    .descricao-esquerda{
        height: 340px;
        align-items: flex-start;
    }
    .descricao-direita{
        height: 340px;
        align-items: flex-end;
    }
    
    .descricao-esquerda p{
        font-size: 18px;
        text-align: justify;
        line-height: 30px;
    }
    
    .descricao-direita p{
        font-size: 18px;
        text-align: right;
    }

}

@media screen and (min-width: 760px) and (max-width: 1278px){
    main section{
        padding: 32px 60px;
        flex-direction: column;
        gap: 32px;
        align-self: stretch;
    }

    section div{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .sustentabiladade{
        display: flex;
        flex-direction: column-reverse;
    }

    h6{
        font-size: 32px;
        text-align: center;
        width: 100%;
    }

    .descricao-esquerda p{
        text-align: center;
        font-size: 20px;
        line-height: 40px;
        width: 528px;
    }
    .descricao-direita p{
        text-align: center;
        font-size: 20px;
        line-height: 40px;
    }

    .descricao-direita{
        align-items: flex-end;
    }
    .descricao-esquerda{
        align-items: flex-start;
    }
}

@media screen and (min-width: 359px) and (max-width: 759px){
    section img{
        width: 312px;
    }

    section h6{
        font-size: 32px;
        text-align: center;
    }

    section{
        display: flex;
        padding: 32px 24px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-self: stretch;
        gap: 32px;
    }

    .sustentabiladade{
        flex-direction: column-reverse;
    }

    section p{
        font-size: 20px;
    }
  
}

main section{
    display: flex;
    justify-content: center;
    align-items: center;
}

.descricao-esquerda{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 24px;
}

.descricao-direita{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 24px;
}

h6{
    color: var(--cor-escura);
    font-family: var(--raleway-font);
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

section p{
    color: var(--cor-escura);
    text-align: center;
    font-family: var(--raleway-font);
    font-style: normal;
    font-weight: 500;
    line-height: 40px; 
}
`
export default DivXp;