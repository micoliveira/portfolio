import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Header from "./Components/Header";
import Inicio from './Components/Inicio';
import Projetos from './Components/Projetos';
import Sobre from './Components/Sobre';

function App () {
return(
  <>
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route path='/' element={<Inicio/>}/>
    <Route path='/Sobre' element={<Sobre/>}/>
    <Route path='Projetos' element={<Projetos/>}/>    
  </Routes>
  
  </BrowserRouter>
  </>
)
}
export default App
