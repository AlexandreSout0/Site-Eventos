import React, { useState } from 'react';
import './login.css';
import {Link,Navigate} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import {auth} from '../../config/firebase';
import 'firebase/auth';



function Login(){

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [msgTipo, setmsgTipo] = useState();

    const dispatch = useDispatch();

    function logar(){
        auth.signInWithEmailAndPassword(email, senha).then(resultado => {
            setmsgTipo('sucesso')
            setTimeout( ()=> {
                dispatch({type: 'LOG_IN', usuarioEmail: email});
            },2000)

        }).catch(erro => {
            setmsgTipo('erro')
        });
        
    }
    return(
       <div className="login-content d-flex align-items-center">

        {/* Se usuário estiver logado vai para tela inicial  */}
        { useSelector(state => state.usuarioLogado) > 0 ? <Navigate to = '/' /> : null } 

            <form className="form-signin mx-auto">
                <div className="text-center mb-4">
                <i class="fa-solid fa-feather text-white fa-4x"></i>
                <h1 className="h3 mb-3 text-white font-weight-bold mt-2">Login</h1>
                </div>

                <input onChange = {(e) => setEmail(e.target.value)} type="email" class="form-control my-2" id="floatingInput" placeholder="Email" />
                <input onChange = {(e) => setSenha(e.target.value)} type="password" class="form-control my-2" id="floatingPassword" placeholder="Senha" />

                <button onClick = {logar} class="w-100 btn btn-lg btn-login" type="button">Logar</button>

                <div className="msg-login text-white text-center my-5">
                {msgTipo === 'sucesso' && <span role="img" aria-label={"Emoji"} ><strong>WoW!</strong> Você está conectado! &#128526;</span>}
                {msgTipo === 'erro' && <span role="img" aria-label={"Emoji"} ><strong >Ops!</strong> Verifique se a senha ou usuário estão corretos! &#128546; </span>}               

   
                </div>

                <div className="opcoes-login mt-5">
                <Link to = '/UsuarioRecuperarSenha' className="mx-2">Recuperar Senha</Link>
                <spam className = "text-white">&#9733;</spam>
                <Link to = '/Cadastro' className="mx-2">Quero Cadastrar</Link>
                </div>
            </form>
        </div>
    )
}

export default Login;