import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';


/*  Páginas  */
import Login from "./view/login/index";
import Cadastro from './view/cadastro/index';
import Home from './view/home/index';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/" element = {<Home />} />

      </Routes>
    </BrowserRouter>

  );
}

export default App;
