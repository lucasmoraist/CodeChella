import React from "react";
import { Routes, Route} from 'react-router-dom';
import Home from '../components/home/Home'
import Experiencia from "../components/experiencia/Experiencia";

export default function MainRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/experiencia" element={<Experiencia/>}/>
        </Routes>
    )
}