import React, { useState } from 'react';
import './login.css';
import { auth } from '../../config/firebase';
import 'firebase/compat/auth';
import {Link} from 'react-router-dom';

function Login(){

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [msgTipo, setmsgTipo] = useState();

    function logar(){
        auth.signInWithEmailAndPassword(email, senha).then(resultado => {
            setmsgTipo('Sucesso');
        }).catch(erro => {
            setmsgTipo('erro');
        });
    }


    return(
       <div className="login-content d-flex align-items-center">
            <form className="form-signin mx-auto">
                <div className="text-center mb-4">
                <h1 className="h3 mb-3 text-white font-weight-bold">Login</h1>
                </div>

                <input onChange = {(e) => setEmail(e.target.value)} type="email" class="form-control my-2" id="floatingInput" placeholder="Email" />
                <input onChange = {(e) => setSenha(e.target.value)} type="password" class="form-control my-2" id="floatingPassword" placeholder="Senha" />

                <button onClick = {logar} class="w-100 btn btn-lg btn-login" type="button">Logar</button>

                <div className="msg-login text-white text-center my-5">
                    {
                        msgTipo === 'sucesso' && <span> WoW! Você está conectado :P </span>
                    }
                    {
                        msgTipo === 'erro' &&  <span> Ops! Email ou Senha Inválidos</span>
                    }
   
                </div>

                <div className="opcoes-login mt-5">
                <Link to = 'Cadastro' className="mx-2">Recuperar Senha</Link>
                <spam className = "text-white">&#9733;</spam>
                <Link to = 'Cadastro' className="mx-2">Quero Cadastrar</Link>
                </div>
            </form>
        </div>
    )
}

export default Login;