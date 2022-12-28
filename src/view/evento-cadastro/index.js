import React, { useState } from 'react';
import './evento-cadastro.css';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import {auth} from '../../config/firebase';
import 'firebase/auth';
import Navbar from '../../componentes/navbar';

function EventoCadastro(){

    const [msgTipo, setMsgTipo] = useState();
    const [titulo, setTitulo] = useState();
    const [tipo, setTipo] = useState();
    const [detalhes, setDesalhes] = useState();
    const [data, setData] = useState();
    const [hora, setHora] = useState();
    const [foto, setFoto] = useState();
    const [usuarioEmail, setUsuarioEmail] = useState();
    



    return(

        <>
            <Navbar />
            <div className = "col-12 mt-5">
                
                <div className="row">
                    <h3 className="mx-auto font-weight-bold">Novo Evento</h3>    
                </div>

                <form>
                    <div className="from-group">
                        <label>Título:</label>
                        <input type = "text" className = "form-control" />
                    </div>

                    <div className= "form-group">
                        <label>Tipo do Evento: </label>
                        <select className="form-control">
                            <option disabled selected value> --  Selecione um tipo -- </option>
                            <option>Festa</option>
                            <option>Teatro</option>
                            <option>Show</option>
                            <option>Evento</option>
                        </select>
                    </div>
                    
                    <div className = "from-group">
                        <label>Descrição do Evento: </label>
                        <textarea className= "form-control" rosw = "3" />
                    </div>

                    <div className= "form-group row">
                        <div className="col-6">
                            <label>Data:</label>
                            <input type = "date" className="form-control" />
                        </div>
                        
                        <div className="col-6">
                            <label>Hora:</label>
                            <input type = "time" className="form-control" />
                        </div>
                    </div>
                        <div className="form-group">
                            <label>Upload da Foto:</label>
                            <input type = "file" className= "form-control" />
                        </div>
                        <button type = "button" className="btn btn-lg btn-block mt-3 mt-5 btn-cadastro">Publicar Evento</button>
                </form>
                
                <div className="msg-login text-center mt-2">
                    {msgTipo === 'sucesso' && <span role="img" aria-label={"Emoji"} ><strong>Boa!</strong> Evento publicado! &#128526;</span>}
                    {msgTipo === 'erro' && <span role="img" aria-label={"Emoji"} ><strong >Ué!</strong> Não foi possível publicar o evento! &#128546; </span>}               
                </div>
        </div>

        </>

    )
}

export default EventoCadastro;