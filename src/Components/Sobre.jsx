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

        <p>Atualmente, estou envolvida em duas importantes iniciativas de trabalho voluntário que têm sido fundamentais para o meu crescimento profissional e pessoal. Em 2023, concluí minha formação em desenvolvimento front-end e, desde então, venho contribuindo como voluntária na instituição Vai na Web, desempenhando um papel significativo como colaboradora nas aulas de Soft Skills  reconhecendo a importância de compartilhar conhecimento e habilidades que transcendem o âmbito técnico. Nesse contexto, também sou voluntária como colaboradora Front-end na DevsFree aonde temos reuniões 4 vezes na semana para escopo do projeto e desenvolvendo junto a uma equipe de diversos conhecimentos habilidades nescessárias para o mercado de trabalho.

A Vai na Web desempenhou um papel transformador em minha trajetória, proporcionando não apenas conhecimento técnico, mas também uma missão compartilhada de diminuir a desigualdade e democratizar o acesso ao aprendizado. Acredito na oportunidade de oferecer conhecimento a quem precisa, baseando-se na disponibilidade de tempo para aprender.

Paralelamente, estou imersa no universo da trilha de talentos digitais, buscando aprimorar meus conhecimentos em Cloud AWS, com a intenção de agregar ainda mais valor a minhas Hard Skill cursando na instituição Vai na Web.

Além do meu envolvimento técnico, estou trilhando meu caminho acadêmico no curso de Análise e Desenvolvimento de Sistemas pela Cruzeiro do Sul. Minha jornada não se resume apenas a códigos e algoritmos; também desenvolvo sólida experiência em atendimento ao cliente. Cultivei a habilidade de compreender as necessidades do cliente e oferecer soluções de maneira proativa.

Investi na prática da Comunicação Não Violenta e resolução de conflitos, reconhecendo a importância dessas competências para construir ambientes colaborativos e saudáveis. Minha paixão pelo aprendizado é constante, buscando ampliar tanto minhas habilidades técnicas (Hard-skills) no universo do desenvolvimento, quanto minhas habilidades interpessoais (Soft-skills), enriquecendo meu perfil profissional e contribuindo para a construção de relacionamentos significativos.

Com um profundo amor pelas pessoas, meu objetivo é sempre trabalhar de forma colaborativa, compreendendo o momento único de cada indivíduo. Estou entusiasmada para compartilhar mais sobre meu percurso e como posso contribuir para projetos desafiadores e inspiradores. Vamos explorar juntos o potencial de uma colaboração incrível!</p>

          
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
