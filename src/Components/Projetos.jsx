import React from 'react';
import Footer from './Footer';
import "../Style/project.scss";
import "../Style/reset.scss";

import Calculadora from "../assets/calculadora.png"
import Fantastika from "../assets/fantastika.png";
import Saudavel from "../assets/saudavel.png";
import Inverno from "../assets/winter.png"
import Modelo from "../assets/modelo.png"


function Projetos () {
return(
  <>
  <main className='container-pai'>
   <h2> Uma olhadinha nos meus projetos:</h2>
    <figure className='container-filho'>
      <a href='https://github.com/micoliveira/calculadora-VNW'><img src={Calculadora} alt="" /></a>
      <a href='https://github.com/micoliveira/Fantastika'><img src={Fantastika} alt="" /></a>
      <a href='https://github.com/micoliveira/One-page-saudavel'><img src={Saudavel} alt="" /></a>
      <a href='https://github.com/micoliveira/ProjetoWinter-DesafioVnW'><img src={Inverno} alt="" /></a>
      <a href='https://github.com/micoliveira/projeto_annabela'><img src={Modelo} alt="" /></a>
    </figure>

  </main>
  <Footer/>
  </>
)
}
export default Projetos;
