import React, { useState } from 'react';
import './usuario-recuperar-senha.css';
import Navbar from '../../componentes/navbar/index'
import {auth} from '../../config/firebase';
import 'firebase/auth';

function UsuarioRecuperarSenha (){



    return(
        <>
            <Navbar />
            <div className =  "form-cadastro">
                <form className = "text-center form-login mx-auto mt-5">
                    <h3 className = "mb-3 font-weight-bold">Recuperar Senha</h3>
                    <input type = "email" className = "form-control my-2" placeholder="Email" ></input>

                    <div className= "msg my-5">
                      <spam></spam>  
                    </div>
                    <button type = "button" className="btn btn-lg btn-block btn-enviar">Enviar</button>
                </form>
            </ div>        
        </>

    )
}

export default UsuarioRecuperarSenha;