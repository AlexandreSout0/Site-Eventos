import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';


/*  Páginas  */
import Login from "./view/login/index";
import Cadastro from './view/cadastro/';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="Cadastro" element={<Cadastro />} />

      </Routes>
    </BrowserRouter>

  );
}

export default App;


// <Router>
// <Route path = "/" element = {<Login />} />
// <Route path = "/cadastro" element = {<Cadastro />} />
// </Router>