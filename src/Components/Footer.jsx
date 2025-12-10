import React from 'react';
import "../Style/reset.scss";
import "../Style/Footer/styleFooter.scss" 
import logoMarca from "../assets/logo2.png";
import Linkedin from "../assets/linkedin.svg";
import Github from "../assets/github.svg";
import Gmail from "../assets/gmail.svg";

function Footer() {
  return (
    <footer className='footer-repo'>
      <div className="footer-content">
        <nav>
            <menu>
                <li><a href='https://www.linkedin.com/in/michele-oliveira-969218122/' target="_blank" rel="noreferrer"><img src={Linkedin} alt="Link para meu Linkedin" /></a></li>
                <li><a href='https://github.com/micoliveira' target="_blank" rel="noreferrer"><img src={Github} alt="Link para meu GitHub" /></a></li>
                <li><a href='mailto:mariamichelep@gmail.com' target="_blank" rel="noreferrer"><img src={Gmail} alt="Link para meu e-mail" /></a></li>
            </menu>
        </nav>
        <img src={logoMarca} alt="Logotipo escrito Michele Dev entre chaves" className='logo-footer' />
      </div>

      <p className="copyright">
        © 2024 Michele Oliveira. Todos os direitos reservados.
      </p>

    </footer>
  )
}

export default Footer;