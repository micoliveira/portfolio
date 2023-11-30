import React from 'react';
import { Link } from 'react-router-dom';
import "../Style/styleHeader.scss";
import "../Style/reset.scss";
import logoMarca from "../assets/logo2.png";




function Header() {

  
  return (
    <>
    <header>

      <figure >
        <img src={logoMarca} alt='Logomarca com o nome Michele' className='logo' />
      </figure>

      <button className='button-cv'><a className='link-cv' href="https://drive.google.com/file/d/1ziGkQwkRnoMrPY2InzAyDj1zO4hgPGf0/view?usp=drive_link" target="_black" rel='external'>Download CV</a></button>


      <nav className='container'>
        <Link to="/">Inicio</Link>
        <Link to="/Sobre">Sobre</Link>
        <Link to="/Projetos">Projetos</Link>
      </nav>



    </header >

    </>
  )
}
export default Header
