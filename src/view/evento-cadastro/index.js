import React, { useState } from 'react';
import './evento-cadastro.css';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import {auth} from '../../config/firebase';
import 'firebase/auth';
import Navbar from '../../componentes/navbar';

function EventoCadastro(){
    return(

        <>
            <Navbar />
            <div className = "col-12">
                <div className="row">
                    <h3 className="mx-auto font-weight-bold">Novo Evento</h3>    
                </div>

            <form>
                <div className="from-group">
                    <label>Título:</label>
                    <input type = "text" className = "form-control" />
                </div>

                
                <div className= "form-group">
                    <select className="from-control">
                        <option disabled selected> --  Selecione um tipo --</option>
                        <option>Festa</option>
                        <option>Teatro</option>
                        <option>Show</option>
                        <option>Evento</option>
                    </select>
                </div>
                <div className = "from-group">
                    <label>Descrição do Evento</label>
                    <textarea className= "form-control" rosw = "3" />
                </div>

                <div className= "form-group row">
                    <div className="col-6">
                        <label>Data:</label>
                        <input type = "data" className="form-control" />
                    </div>
                    <div className="col-6">
                        <label>Hora:</label>
                        <input type = "time" className="form-control" />
                    </div>
                </div>


            </form>
        </div>

        </>

    )
}

export default EventoCadastro;