import React from "react";
import { Routes, Route} from 'react-router-dom';
import Home from '../components/home/Home'
import Experiencia from "../components/experiencia/Experiencia";
import Mapa from "../components/mapa/Mapa";
import Info from "../components/info/GeneralInfo";

export default function MainRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/experiencia" element={<Experiencia/>}/>
            <Route path="/setores" element={<Mapa/>}/>
            <Route path="/informacoes" element={<Info/>}/>
        </Routes>
    )
}