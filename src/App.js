import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import store from '../src/store/index';
import { Provider } from 'react-redux';



/*  Páginas  */
import Login from "./view/login/index";
import Cadastro from './view/cadastro/index';
import Home from './view/home/index';


function App() {
  return (
    <Provider store= {store} >
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Cadastro" element={<Cadastro />} />
          <Route path="/" element = {<Home />} />

        </Routes>
      </BrowserRouter>
    </Provider>

  );
}

export default App;
