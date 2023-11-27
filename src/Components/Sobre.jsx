import React from 'react';
import Footer from './Footer';
import "../Style/reset.scss";
import "../Style/about.scss";



function Sobre () {
return(
  <>
  
  <main className='main-about'>
      <section className='container-about'>
      <h2>Mais um pouco sobre mim:</h2>
      <h4>Me chamo Michele Maria</h4>
      <h4>tenho 27 anos</h4>
      <h4>Moro no interior de São Paulo</h4>
      <h4>Amo Ler e animais</h4>
      </section>

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

  </main>
  <Footer/>
  </>
)
}
export default Sobre;
