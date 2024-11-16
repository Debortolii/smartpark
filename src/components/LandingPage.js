import React from 'react';
import './LandingPage.css';
import { Carousel } from 'primereact/carousel'; // Importando o Carousel
import { Card } from 'primereact/card'; // Importando o Card do PrimeReact
import 'primereact/resources/themes/lara-light-indigo/theme.css'; // Tema do PrimeReact
import 'primereact/resources/primereact.min.css'; // Estilos do PrimeReact
import { Avatar } from 'primereact/avatar';

const LandingPage = () => {

  const features = [
    { id: 1, title: "Monitoramento em Tempo Real", description: "Confira agora mesmo a disponibilidade de vagas em tempo real em toda a cidade, acessando informações atualizadas de forma rápida e prática. Tenha um panorama completo das opções disponíveis e planeje sua escolha com facilidade e eficiência." },
    { id: 2, title: "Reserva Antecipada", description: "Garanta sua vaga com antecedência para evitar imprevistos e economizar tempo precioso no seu dia a dia. Com uma simples reserva antecipada, você assegura tranquilidade, praticidade e mais eficiência para se dedicar ao que realmente importa." },
    { id: 3, title: "Pagamentos Integrados", description: "Realize seus pagamentos pelo aplicativo de forma rápida, segura e prática, garantindo comodidade e total proteção para suas transações, tudo em apenas alguns toques na tela" },
    { id: 4, title: "Segurança", description: "O Smart Park conta com recursos de segurança avançados que protegem informações pessoais e dados financeiros de todos os usuários, visando proporcionar uma experiência segura e otimizada." },
    { id: 5, title: "Comodidade e Eficiência", description: "A facilidade de reservar vagas antecipadamente e realizar pagamentos digitais proporciona uma experiência livre de frustrações, economizando tempo e agilizando o processo de estacionamento para os usuários." },
    { id: 6, title: "Inovação", description: "O aplicativo utiliza tecnologia de ponta, integrando dados em tempo real e geolocalização para revolucionar o estacionamento em cidades pequenas. É uma solução inteligente, criada para o motorista moderno que busca conveniência e eficiência no seu dia a dia." },
    { id: 7, title: "Quem somos?", description: "Nossa equipe é formada por quatro estudantes do Ensino Médio integrado ao Técnico em Informática da Escola Honório Fraga. Os integrantes são: Ana Goldner, Júlia Debortoli, Maria Clara Pereira e Talys Zani. Juntos, unimos criatividade e conhecimento técnico para desenvolver soluções inovadoras e eficazes." },
    { id: 8, title: "Como surgiu a ideia?", description: "Desenvolvemos o aplicativo para resolver um problema comum: o trânsito nas cidades. Percebendo os desafios urbanos, criamos a empresa com o objetivo de oferecer soluções inteligentes que melhorem a mobilidade e reduzam o tráfego nas cidades." },
    { id: 9, title: "Qual o propósito", description: "O projeto visa oferecer uma experiência mais acessível e intuitiva para facilitar a busca por estacionamentos. Nosso objetivo é transformar a mobilidade urbana, simplificando o cotidiano dos motoristas, economizando tempo e proporcionando comodidade por meio de soluções inovadoras." },
  ];

  const responsiveOptions = [
    {
      breakpoint: '1024px', // Para telas maiores que 1024px
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: '768px', // Para telas entre 768px e 1024px
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: '560px', // Para telas menores que 768px
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const featureTemplate = (feature) => {
    return (
      <div className="feature-card">
        <Card
          className='card'
          title={feature.title}
          footer={<p>{feature.description}</p>}
        >
        </Card>
      </div>
    );
  };

  return (
    <div>
      <div className="landing">
        {/* Seção Esquerda */}
        <div className="landing-left" style={{ flex: 1 }}>
          <h1>
            SMART <br />
            <span className="outline">PARK</span>
          </h1>
        </div>

        <div className="landing-right">
          <img src="/logo.svg" alt="Logo" className="landing-logo" />
          <p className="landing-description">
            O app que transforma o estacionamento em sua cidade: inteligente, ágil e pensado para facilitar seu dia a dia.
            Encontre vagas com eficiência, reserve com antecedência e desfrute de uma mobilidade urbana mais prática e moderna!
          </p>
        </div>
      </div>

      <section className="features">
        <h2>Conheça o Smart Park</h2>
        <Carousel
          value={features}
          numVisible={3}
          numScroll={3}
          responsiveOptions={responsiveOptions}
          className="custom-carousel"
          circular
          autoplayInterval={5000}
          itemTemplate={featureTemplate}
        />
      </section>

      <section className="about">
        <h2>Sobre o Smart Park</h2>
        <p>
          O Smart Park facilita o estacionamento urbano, oferecendo soluções inteligentes para motoristas e empresas. Com nosso sistema de monitoramento em tempo real, é possível encontrar vagas de forma rápida e eficiente, economizando tempo e evitando frustrações. Nosso objetivo é tornar o trânsito mais fluido e a busca por vagas mais simples, contribuindo para uma mobilidade urbana mais organizada e sustentável. Com o Smart Park, você pode focar no que realmente importa, enquanto nós cuidamos do estacionamento.
        </p>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Smart Park. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default LandingPage;