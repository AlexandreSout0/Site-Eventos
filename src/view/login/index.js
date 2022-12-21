import React, { useState } from 'react';
import './login.css';
import {Link} from 'react-router-dom';

import {auth,db} from '../../config/firebase';
import 'firebase/auth';
import { useSelector, useDispatch } from 'react-redux';



function Login(){

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [msgTipo, setmsgTipo] = useState();

    const dispatch = useDispatch();

    function logar(){
        auth.signInWithEmailAndPassword(email, senha).then(resultado => {
            setmsgTipo('sucesso')
            dispatch({type: 'LOG_IN', usuarioEmail: email});
        }).catch(erro => {
            setmsgTipo('erro')
        });

    }
    {console.log (useSelector(state => state.usuarioEmail))}

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
                {msgTipo === 'sucesso' && <span> </span>}
                {msgTipo === 'erro' && <span><strong>Ops!</strong> Verifique se a senha ou usuário estão corretos! &#128546; </span>}               

   
                </div>

                <div className="opcoes-login mt-5">
                <Link to = '/Cadastro' className="mx-2">Recuperar Senha</Link>
                <spam className = "text-white">&#9733;</spam>
                <Link to = '/Cadastro' className="mx-2">Quero Cadastrar</Link>
                </div>
            </form>
        </div>
    )
}

export default Login;