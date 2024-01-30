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

                    <p className='text-repo'>Atualmente, estou envolvida em duas iniciativas de trabalho voluntário cruciais para meu desenvolvimento profissional e pessoal. Após concluir minha formação em desenvolvimento front-end em 2023, tornei-me voluntária na Vai na Web, desempenhando um papel essencial como colaboradora nas aulas de Soft Skills e trabalho como voluntária Front-end na DevsFree, participando de reuniões semanais para definir o escopo do projeto e desenvolver habilidades necessárias para o mercado de trabalho. A Vai na Web foi transformadora, não apenas proporcionando conhecimento técnico, mas também compartilhando a missão de diminuir a desigualdade e democratizar o acesso ao aprendizado. Além de me aprimorar em Cloud AWS, estou 
                    trilhando meu caminho acadêmico em Análise e Desenvolvimento de Sistemas, investindo em habilidades interpessoais e técnicas. Com um profundo amor pelas pessoas, estou entusiasmada para contribuir em projetos desafiadores e inspiradores, explorando o potencial de colaborações incríveis.

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
