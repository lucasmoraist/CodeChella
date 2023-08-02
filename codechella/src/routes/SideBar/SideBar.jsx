import React from 'react'
import { FaTimes } from 'react-icons/fa'
import styled from 'styled-components'

const Sidebar = ({ active }) => {

    const closeSidebar = () => {
      active(false)
    }
  
    return (
      <DivSide sidebar={active}>
        <FaTimes onClick={closeSidebar} />  
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
height: 243px;
width: 193px;
top: 0px;
left: 0px;
left: ${props => props.sidebar ? '50%' : '0'};
top: ${props => props.sidebar ? '15%' : '0'};
animation: showSidebar .4s;

> svg {
    position: absolute;
    color: white;
    width: 20px;
    height: 20px;
    top: -60px;
    left: 130px;
    cursor: pointer;
}

@keyframes showSidebar {
  from {
    opacity: 0;
    width: 0;
  }
  to {
    opacity: 1;
    width: 300px;
  }
}
`