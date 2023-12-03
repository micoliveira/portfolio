import React from 'react';
import Footer from './Footer';
import "../Style/reset.scss";
import "../Style/Sobre/sobre.scss";
import Eu from"../assets/me.jpg";



function Sobre() {

  
  return (
    <>

      <main className='main-about'>
        <section className='container-about'>
          <section className='containe-dig'>
          <h2 className='type-out'>Olá, eu sou a Michele Maria</h2>
          </section>
        </section>

        <section className='container-img'>

        <p>Atualmente, estou imersa no universo da trilha de desenvolvimento Front-end na renomada instituição Vai Na Web e paralelamente,
          estou trilhando meu caminho acadêmico no curso de Análise e Desenvolvimento de Sistemas pela Cruzeiro do Sul. Minha jornada não se resume apenas
          aos códigos e algoritmos com uma sólida experiência em atendimento ao cliente, tenho cultivado a habilidade de compreender as necessidades do cliente
          e oferecer soluções de maneira proativa, além disso, tenho investido na prática da Comunicação Não Violenta e resolução de conflitos, acreditando que
          estas competências são fundamentais para construir ambientes colaborativos e saudáveis. Minha paixão pelo aprendizado é incessante, e busco
          constantemente ampliar não apenas minhas habilidades técnicas (Hard-skills) no universo do desenvolvimento, mas também desenvolver habilidades
          interpessoais (Soft-skills) que enriqueçam meu perfil profissional e contribuam para a construção de relacionamentos significativos.
          Com um grande amor pelas pessoas, meu objetivo é sempre trabalhar de forma colaborativa, compreendendo o momento único de cada indivíduo.
          Estou animada para compartilhar mais sobre meu percurso e como posso contribuir para projetos desafiadores e inspiradores vamos explorar juntos
          o potencial de uma colaboração incrível!</p>

          
          <figure className='img-eu'>
            <img src={Eu} alt="" />
          </figure>

          

          </section>

          
          

        <section className='container-list'>

          <section className='container-child-1'>
            <h4>Soft-skills</h4>
          <ul>

            <li>Gestão Emocional</li>
            <li>Comunicação não violenta</li>
            <li>Produtividade e gestão do tempo</li>
            <li>Suporte ao cliente</li>
         
          </ul>
          </section>

          <section className='container-child-2'>
            <h4>Hard-Skills</h4>
            <ul>
              <li>Html5 e CSS </li>
              <li>Javascript</li>
              <li>React</li>
              <li>Git</li>
              <li>MySql</li>
              <li>Node.js</li>
            </ul>
          </section>

        </section>

      </main>
      <Footer />
    </>
  )
}
export default Sobre;
