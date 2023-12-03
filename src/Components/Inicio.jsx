import React from 'react';
import "../Style/Inicio/styleInicio.scss";
import Footer from './Footer';
import Calculadora from "../assets/calculadora.png";
import Fantastika from "../assets/fantastika.png"
import Saudavel from "../assets/saudavel.png"
import Computador from "../assets/computador.png"



function Inicio() {
    return (
        <>

            <main>

                <section className='sect-repo'>
                    <div className='container-dig'>
                    <h1 className='type-out'>Olá e bem-vindo(a).</h1>
                    </div>

                    <p className='text-repo'>Atualmente, estou imersa na trilha de desenvolvimento Front-end na Vai Na Web e cursando Análise e Desenvolvimento de Sistemas na Cruzeiro do Sul. Minha experiência inclui sólidas habilidades em atendimento ao cliente, priorizando soluções proativas. Investindo em Comunicação Não Violenta e resolução de conflitos, acredito na importância dessas competências para ambientes colaborativos.
                        Minha paixão pelo aprendizado constante abrange tanto habilidades técnicas quanto interpessoais. Com amor pelas pessoas, meu objetivo é trabalhar colaborativamente, compreendendo cada indivíduo. Estou animada para compartilhar minha jornada e contribuir para projetos desafiadores. Vamos explorar o potencial de uma colaboração incrível!

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
                        <a href="https://one-page-saudavel.vercel.app/"><img src={Saudavel} alt="" /></a>

                    </figure>


                </section>
            </main>

            <Footer/>

        </>

        
    )
    
}
export default Inicio;
