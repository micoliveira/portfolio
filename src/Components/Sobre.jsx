// src/Components/Sobre.jsx
import React from 'react';
import Footer from './Footer';
import "../Style/reset.scss";
import "../Style/Sobre/sobre.scss";
import Eu from "../assets/me.png"; 

function Sobre() {
  return (
    <>
      <main className='main-about'>
        
        {/* Título Principal */}
        <section className='intro-header'>
          <h2 className='type-out'>Conheça um pouco mais sobre mim</h2>
        </section>

        {/* Container: Texto Novo + Foto */}
        <div className="about-content">
            
            <section className='text-container'>
                <p>
                  Sou uma profissional em transição de carreira, unindo minha sólida experiência em <strong>atendimento ao cliente</strong> e <strong>logística</strong> com minha paixão por tecnologia. Minha trajetória anterior aprimorou minha capacidade de <strong>comunicação</strong>, <strong>resolução de problemas</strong> sob pressão e <strong>trabalho em equipe</strong>. Atualmente, estou focada em migrar para a área de TI, trazendo essa bagagem analítica e adaptável para novos desafios.
                </p>
                
                {/* Parágrafo Corrigido */}
                <p>
                  Estou cursando <strong>Análise e Desenvolvimento de Sistemas</strong> no IFSP. Concluí o curso de <strong>Desenvolvimento Front-end com AWS</strong> pelo instituto <strong>Vai Na Web</strong> e, atualmente, estou imersa em um intensivo de <strong>Cibersegurança</strong> oferecido pela <strong>JA Brasil</strong>, preparando-me para realizar gratuitamente o exame da certificação <strong>Cisco Certified Support Technician em Segurança Cibernética (CCST)</strong>.
                </p>
                
                <p>
                  Busco uma oportunidade como <strong>Desenvolvedora Front-end Júnior</strong> ou na área de <strong>Cibersegurança</strong>, onde possa unir minhas competências técnicas (como <strong>JavaScript, React, Node.js</strong>) às minhas habilidades interpessoais. Valorizo ambientes colaborativos e acredito que a <strong>empatia</strong>, a <strong>gestão emocional</strong> e o aprendizado contínuo são fundamentais para construir soluções digitais que realmente façam a diferença.
                </p>
            </section>

            <figure className='img-container'>
                <img src={Eu} alt="Foto de Michele Maria" />
            </figure>
        </div>

        {/* Seção de Habilidades (Skills) */}
        <section className='skills-section'>
            
            {/* Card Soft Skills */}
            <div className="skill-box">
                <h4>Soft Skills</h4>
                <ul className="tags-list">
                    <li>Gestão Emocional</li>
                    <li>Comunicação Não Violenta</li>
                    <li>Produtividade</li>
                    <li>Gestão do Tempo</li>
                    <li>Suporte ao Cliente</li>
                    <li>Empatia</li>
                    <li>Trabalho em Equipe</li>
                </ul>
            </div>

            {/* Card Hard Skills */}
            <div className="skill-box">
                <h4>Hard Skills</h4>
                <ul className="tags-list">
                    <li>HTML5 & CSS3</li>
                    <li>JavaScript (ES6+)</li>
                    <li>React.js</li>
                    <li>Git & GitHub</li>
                    <li>Node.js</li>
                    <li>MySQL</li>
                    <li>Cloud AWS</li>
                    <li>Cibersegurança (Básico)</li>
                </ul>
            </div>

        </section>

      </main>
      <Footer />
    </>
  )
}

export default Sobre;