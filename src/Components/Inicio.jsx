import React from 'react';
import "../Style/Inicio/styleInicio.scss";
import Footer from './Footer';
import Calculadora from "../assets/calculadora.png";
import Fantastika from "../assets/fantastika.png";
import Computador from "../assets/computador.png"
import projetoConecTEA from "../assets/projeto-ConecTEA.png";



function Inicio() {
    return (
        <>

            <main>

                <section className='sect-repo'>
                    <div className='container-dig'>
                    <h1 className='type-out'>Olá e bem-vindo(a).</h1>
                    </div>

                    <p className='text-repo'>Estudante de Análise e Desenvolvimento de Sistemas no IFSP, apaixonada por tecnologia e inovação. 
    Com experiência prática em <strong>Front-end (React, JavaScript)</strong> e integração de APIs, 
    estou expandindo meus horizontes para a <strong>Cibersegurança</strong>, buscando aplicar boas práticas 
    de proteção desde a primeira linha de código. Minha trajetória profissional anterior desenvolveu em mim 
    habilidades analíticas e de comunicação essenciais para criar soluções digitais seguras e eficientes.

                    </p>
                    <a className="button-repo" href='./Sobre'><button>Saiba mais aqui..</button></a>

                    <figure className='container-repo'>
                        <img src={Computador} alt="" className='imgMinha' />
                    </figure>
                    
                </section>



                <section className='secao2'>
                    <h2>Projetos em destaque:</h2>

                    <figure className='projetos'>

                        <a href="https://calculadora-vnw-eta.vercel.app/"><img src={Calculadora} alt="" /></a>
                        <a href=" https://fantastika-five.vercel.app/"><img src={Fantastika} alt="" /></a>
                        <a href="https://connectea.netlify.app/"><img src={projetoConecTEA} alt="" /></a>

                    </figure>


                </section>
            </main>

            <Footer/>

        </>

        
    )
    
}
export default Inicio;
