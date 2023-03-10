import React from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';


function Navbar(){
    const dispatch = useDispatch();
    
    return(
        
        <nav className="navbar navbar-expand-lg ">
            <i class="fa-solid fa-feather text-white fa-2x"></i>
            <span className="navbar-brand text-white font-weight-bold ml-3" >Eventos</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fa-solid fa-bars text-white"></i>           
            </button>
            
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav"> 
                    
                    <li className="nav-item"><Link className = "nav-link" to = "/" >Home</Link></li>
                    
                    {
                        useSelector (state => state.usuarioLogado) > 0 ?
                        <>
                            <li className="nav-item"><Link className = "nav-link" to = "/EventoCadastro" >Publicar Eventos</Link></li>
                            <li className="nav-item"><Link className = "nav-link" to = "/Login" >Meus Eventos</Link></li>
                            <li className="nav-item"><Link className = "nav-link" onClick={() => dispatchEvent({ type: 'LOG_OUT'})}>Sair</Link></li>
                        </>
                        :
                        <>
                            <li className="nav-item"><Link className = "nav-link" to = "/Cadastro" >Cadastrar</Link></li>
                            <li className="nav-item"><Link className = "nav-link" to = "/Login" >Login</Link></li>
                        </>
                        }
                    

                </ul>
            </div>
      </nav>



    )

    
}

export default Navbar;