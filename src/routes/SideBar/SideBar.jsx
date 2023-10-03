import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Sidebar = ({ active }) => {

    const closeSidebar = () => {
      active(false)
    }
  
    return (
      <DivSide sideBar={active}>
        <FaTimes onClick={closeSidebar} />
          <ul>
            <li><Link to="/experiencia">A experiência</Link></li>
            <li><Link to="/setores">Mapa de Setores</Link></li>
            <li><Link to="/informacoes">Informações</Link></li>
            <li><Link to="/forms">Ingressos</Link></li>
          </ul>
      </DivSide>
    )
  }
  
export default Sidebar

const DivSide = styled.div`
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

background-color: var(--cor-primaria);
position: absolute;
border-radius: 10px;
height: 243px;
width: 175px;
top: 0px;
left: 0px;
left: ${props => props.sideBar ? '56%' : '0'};
top: ${props => props.sideBar ? '30px' : '0'};
animation: showSidebar .4s;

> svg {
    position: absolute;
    color: white;
    width: 20px;
    height: 20px;
    top: 12px;
    left: 126px;
    cursor: pointer;
}

ul{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  gap: 5px;
}


`