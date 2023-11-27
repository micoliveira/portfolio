import React from 'react';
import { Link } from 'react-router-dom';
import  "../Style/styleHeader.scss";
import "../Style/reset.scss";
import logoMarca from "../assets/logo2.png";




function Header () {
return(
    <>

    <header>  

        

          
        <figure > 
        <img src={logoMarca} alt='Logomarca com o nome Michele' className='logo'/>  
    
        </figure>

    
        <nav className='container'>
        <Link to="/">Inicio</Link>
        <Link to="/Sobre">Sobre</Link>
        <Link to="/Projetos">Projetos</Link>  
        </nav>  
       
      

    </header>
  
  </>
)
}
export default Header
