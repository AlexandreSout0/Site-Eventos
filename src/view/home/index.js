import React, { useState } from 'react';
import './home.css';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import Navbar from '../../componentes/navbar/index';


 function Home() {
    return(
        <>
        <Navbar />
        <h1> {useSelector (state => state.usuarioEmail)} </h1>
        </>
    )

 }

 export default Home;