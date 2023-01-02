// Bibliotecas
import React, { useState } from 'react';
import './home.css';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

// Componentes
import Navbar from '../../componentes/navbar/index';
import EventoCard from '../../componentes/evento-card/index';


 function Home() {
    return(
        <>
        <Navbar />
        <h1> {useSelector (state => state.usuarioEmail)} </h1>
        
        <div className="row">
            <EventoCard />
        </div>
        
        



        </>
    )

 }

 export default Home;