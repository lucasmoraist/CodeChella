import styled from "styled-components"

export const DivForm = styled.div`
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

@media screen and (min-width: 1440px) {
    #main{
        padding: 48px 120px;
    }

    h3{
        font-size: 48px;
    }

    label{
        text-align: center;
    }

    
    form button:hover{
        transition: .4s;
        box-shadow: 4px 4px 0 0 var(--cor-escura);
    }
    
    form button:not(:hover){
        transition: .4s;
    }
}

@media screen and (min-width: 1279px) and (max-width: 1440px) {
    #main{
        padding: 48px 120px;
    }

    h3{
        font-size: 48px;
    }

    label{
        text-align: center;
    }
    
    form button:hover{
        transition: .4s;
        box-shadow: 4px 4px 0 0 var(--cor-escura);
    }
    
    form button:not(:hover){
        transition: .4s;
    }
}

@media screen and (min-width: 760px) and (max-width: 1278px) {
    #main{
        padding: 48px 60px;
    }

    h3{
        font-size: 48px;
    }

    fieldset{
        flex-direction: column;
    }

    label{
        text-align: center;
    }

    form button{
        box-shadow: 4px 4px 0 0 var(--cor-escura);
        cursor: pointer;
    }
}

@media screen and (min-width: 359px) and (max-width: 759px){
    #main{
        padding: 32px 24px;
    }

    h3{
        font-size: 32px;
    }

    fieldset{
        flex-direction: column;
    }
    
    form button{
        display: flex;
        padding: 8px 16px;
        justify-content: center;
        align-items: center;
        gap: 16px;
        border: none;
        border-radius: 16px;
        background-color: var(--cor-primaria);
        box-shadow: 4px 4px 0 0 var(--cor-escura);
        color: var(--cor-clara);
        cursor: pointer;
    }
}

#main{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 48px;
    align-self: stretch;
}

h3{
    color: var(--cor-escura);
    text-align: center;
    font-family: var(--caslistoga-font);
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

form{
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    gap: 32px;
}

form div{
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
}

label{
    color: var(--cor-escura);
    font-family: var(--raleway-font);
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

input{
    width: 100%;
    height: 48px;
    border: none;
    color: var(--cor-escura);
    font-family: var(--raleway-font);
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 40px;
}

select{
    width: 100%;
    height: 48px;
    border: none;
    color: var(--cor-escura);
    font-family: var(--raleway-font);
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 40px;
}

fieldset{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 24px;
    align-self: stretch;
    border: none;
}

form button{
    display: flex;
    padding: 8px 16px;
    justify-content: center;
    align-items: center;
    gap: 16px;
    border: none;
    border-radius: 16px;
    background-color: var(--cor-primaria);
    color: var(--cor-clara);
    cursor: pointer;
}

form button a{
    text-decoration: none;
    color: var(--cor-clara);
}
`