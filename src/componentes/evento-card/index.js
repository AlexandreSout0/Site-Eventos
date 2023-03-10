import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {storage} from '../../config/firebase';
import './evento-card.css';



function EventoCard({id,img,titulo,detalhes,vizualizacoes}){
    
    const[urlImagem, setUrlImagem] = useState();
    useEffect(() => {
        storage.ref(`imagens/${img}`).getDownloadURL().then( url => setUrlImagem(url));
    });

    return(
            <div className = "col-md-3 col-sm-12" >
                <img src = {urlImagem} className="card-img-top img-cartao" alt="Imagem do Evento" />

                <div className = "card-body">
                    <h5>{titulo}</h5>
                    <p className="card-text text-justify">
                        {detalhes}
                    </p>
                    
                    <div className="row rodape-card d-flex align-items-center">
                        <div className = "col-6">
                            <Link to={'/eventodetalhe/' + id} className = "btn btn-sm btn-detalhes">+ detalhes </ Link>
                        </div>
                        
                        <div className="col-6 text-right">
                            <i class="fa-solid fa-eye"></i> <span>{vizualizacoes}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
}


export default EventoCard;