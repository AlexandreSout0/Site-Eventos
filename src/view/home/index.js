// Bibliotecas
import React, { useEffect, useState } from 'react';
import './home.css';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import firebase, { db } from '../../config/firebase.js';

// Componentes
import Navbar from '../../componentes/navbar/index.js';
import EventoCard from '../../componentes/evento-card/index.js';


 function Home() {

    const [eventos, setEventos] = useState([]);
    let listaEventos = [];

    useEffect(() => {
        db.collection('eventos').get().then(async (resultado) => {
            await resultado.docs.forEach( doc => {
                listaEventos.push({
                    id: doc.id,
                    ...doc.data()
                })
            })
            setEventos(listaEventos);
        })
    });


    return(
        <>
            <Navbar />
            <h1> {useSelector (state => state.usuarioEmail)} </h1>
            
            <div className="row p-3">
                { eventos.map ( item => <EventoCard key = {item.id} id = {item.id} img = {item.foto} titulo = {item.titulo} detalhes = {item.detalhes} vizualizacoes = {item.vizualizacoes} />) }
            </div>
            
        </>
    )

 }
//

 export default Home;