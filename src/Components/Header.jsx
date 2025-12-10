import React from 'react';
import { Link } from 'react-router-dom';
import "../Style/Header/styleHeader.scss";
import "../Style/reset.scss";
import logoMarca from "../assets/logo2.png";




function Header() {

  
  return (
    <>
    <header>

      <figure >
        <img src={logoMarca} alt='Logomarca com o nome Michele' className='logo' />
      </figure>

      <nav className='container'>
        <Link to="/">Inicio</Link>
        <Link to="/Sobre">Sobre</Link>
        <Link to="/Projetos">Projetos</Link>
      </nav>

         <button className='button-cv'><a className='link-cv' href="https://drive.google.com/file/d/1FetAa4GNN3RVzcbS_JOgl-T21Wbgstot/view?usp=sharing" target="_blank" rel='noopener noreferrer'>Download CV</a></button>



    </header >

    </>
  )
}
export default Header
