// src/Components/Projetos.jsx
import React, { useRef } from 'react';
import Footer from './Footer';
import "../Style/Projetos/projeto.scss";
import "../Style/reset.scss";

// Imagens
import Calculadora from "../assets/calculadora.png"
import Fantastika from "../assets/fantastika.png";
import Saudavel from "../assets/saudavel.png";
import Inverno from "../assets/winter.png"
import Modelo from "../assets/modelo.png"
import ConecTEA from "../assets/projeto-ConecTEA.png"

function Projetos() {
  // Criamos uma referência para controlar o carrossel
  const carousel = useRef(null);

  // Lista de Projetos (Dados organizados)
  const listaProjetos = [
    {
      id: 1,
      nome: "Calculadora VNW",
      img: Calculadora,
      link: "https://github.com/micoliveira/calculadora-VNW"
    },
    {
      id: 2,
      nome: "Fantastika PetShop",
      img: Fantastika,
      link: "https://github.com/micoliveira/Fantastika"
    },
    {
      id: 3,
      nome: "Vida Saudável",
      img: Saudavel,
      link: "https://github.com/micoliveira/One-page-saudavel"
    },
    {
      id: 4,
      nome: "Projeto Winter",
      img: Inverno,
      link: "https://github.com/micoliveira/ProjetoWinter-DesafioVnW"
    },
    {
      id: 5,
      nome: "Anna Bella Modelo",
      img: Modelo,
      link: "https://github.com/micoliveira/projeto_annabela"
    },
     {
      id: 6,
      nome: "ConecTEA",
      img: ConecTEA,
      link: "https://github.com/micoliveira/ProjectTIPPA"
    }

  ];

  // Função para mover o carrossel para a Esquerda
  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  // Função para mover o carrossel para a Direita
  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  return (
    <>
      <main className='main-projects'>
        
        <section className='title-section'>
          <h2 className='type-out'>Meus Projetos</h2>
        </section>

        {/* Container do Carrossel */}
        <div className="carousel-wrapper">
          
          {/* Botão Esquerdo */}
          <button className="arrow-btn left" onClick={handleLeftClick}>
            &#10094; {/* Símbolo de seta < */}
          </button>

          {/* A trilha onde ficam os cards */}
          <section className='projects-carousel' ref={carousel}>
            
            {/* Aqui usamos o MAP para criar os cards automaticamente baseados na lista */}
            {listaProjetos.map((projeto) => (
              
              <div className='project-card' key={projeto.id}>
                <a href={projeto.link} target="_blank" rel="noreferrer">
                  <img src={projeto.img} alt={`Projeto ${projeto.nome}`} />
                  <div className="card-info">
                    <h3>{projeto.nome}</h3>
                    <p>Ver Projeto</p>
                  </div>
                </a>
              </div>

            ))}

          </section>

          {/* Botão Direito */}
          <button className="arrow-btn right" onClick={handleRightClick}>
            &#10095; {/* Símbolo de seta > */}
          </button>

        </div>

      </main>
      <Footer />
    </>
  )
}

export default Projetos;