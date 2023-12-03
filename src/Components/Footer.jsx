import React from 'react';
import "../Style/reset.scss";
import "../Style/Footer/styleFooter.scss"
import logoMarca from "../assets/logo2.png";
import Linkedin from "../assets/linkedin.svg";
import Github from "../assets/github.svg";
import Gmail from "../assets/gmail.svg";





function Footer () {
return(
    <>

    <footer className='footer-repo'>
        <nav>
            <menu>
                <a href='https://www.linkedin.com/in/michele-oliveira-969218122/'><img src={Linkedin} alt="Link para meu Linkedin" /></a>
                <a href='https://github.com/micoliveira'><img src={Github} alt="Link para meu GitHub" /></a>
                <a href='malto:mariamichelep@gmail.com'><img src={Gmail} alt="Link para meu e-mail" /></a>
            </menu>
    
        </nav>
        <img src={logoMarca} alt="Logotipo escrito Michele Dev entre chaves" className='logo-footer ' />
    </footer>
  
  </>
)
}
export default Footer