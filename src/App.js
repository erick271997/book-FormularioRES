// App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '../src/estilos/App.css'
import Home from './pagina/Home';
import Autores from './pagina/Autores';
import Contactar from './pagina/Contactar';

const App = () => {
  return (
    <div>
     
  
      <BrowserRouter>
      
      <Routes>
      <Route index element={<Home/>}>
      </Route>

      <Route path="/home" element={<Home/>}></Route>
        <Route path="/autores" element={<Autores />}>   </Route>
        <Route path="/contactar" element={<Contactar />}>   </Route>

        </Routes>
   
       
      </BrowserRouter>

      
  
     
    </div>
  );
};

export default App;
