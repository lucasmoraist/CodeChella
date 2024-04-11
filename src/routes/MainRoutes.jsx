import React from "react";
import { Routes, Route} from 'react-router-dom';

import Home from '../pages/home/Home';
import Experiencia from '../pages/experiencia/Experiencia';
import Mapa from '../pages/mapa/Mapa';
import Info from '../pages/info/GeneralInfo';
import Forms from '../pages/forms/Forms';
import Ingresso from '../pages/ingresso/Ingresso';

export default function MainRoutes(){

    return(
        <Routes>
            <Route path="/CodeChella/" element={<Home/>}/>
            <Route path="/experiencia" element={<Experiencia/>}/>
            <Route path="/setores" element={<Mapa/>}/>
            <Route path="/informacoes" element={<Info/>}/>
            <Route path="/forms" element={<Forms/>}/>
            <Route path="/ingresso" element={<Ingresso/>}/>
        </Routes>
    )
}