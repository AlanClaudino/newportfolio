import {createContext, useContext, useEffect, useState} from "react";

export const SiteContext = createContext(1);

// eslint-disable-next-line react-refresh/only-export-components
export const usePageContext = () => {
  return useContext(SiteContext);
};

// eslint-disable-next-line react/prop-types
const PageContext = ({children}) => {
  const [isEnglish, setIsEnglish] = useState(false);
  const [language, setLanguage] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const loading = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const EnglishTheme = {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      text: "Hi there!",
      greeting: "I'm",
      name: "Alan Claudino",
      profession: "Software Engineer",
      contact: "Contact Me",
    },
    about: {
      title: "About Me ___",
      p1: "Hi there! I am Alan, a software engineer from Brazil with experience in developing web applications using Reactjs Library and microservices architecture.",
      p2: "I hold a bachelor's degree in Agronomy from the University of Sao Paulo and I am pursuing an associate's degree in Software Analysis and Development (last semester).",
      p3: "I currently work at Pecege, an association whose purpose is to share high quality knowledge and education. My team is responsible for managing our customer engagement channels, mainly WhatsApp chats and phone calls, through Twilio based applications.",
    },
    skills: {
      title: "My Expertise ___",
    },
    projects: {
      title: "Recent Projects ___",
      fdbCons: {
        subtitle: "FDB Consulting",
        p1: "A budgeting platform for farms and agribusinesses, its main goal is to assist farmers in planning their business operations and developing accurate budgets for future seasons.",
        p2: "The main technologies used in the project were the React library and Firebase platform.",
      },
    },
    contact: {
      title: "Contact Me ___",
      subtitle: "Want to get in touch?",
      p1: "I would love to hear from you. Feel free to drop me a message below.",
      formName: "Name *",
      formEmail: "E-mail *",
      formMessage: "Message *",
      formButton: "Send",
    },
    footer: {
      message: "All rights reserved",
    },
  };

  const PortugueseTheme = {
    nav: {
      home: "Home",
      about: "Sobre",
      skills: "Skills",
      projects: "Projetos",
      contact: "Contato",
    },
    hero: {
      text: "Olá! Tudo bem? Eu sou",
      greeting: "",
      name: "Alan Claudino",
      profession: "Analista de Sistemas",
      contact: "Entre em contato",
    },
    about: {
      title: "Sobre ___",
      p1: "Olá! Como vai?",
      p2: "Meu nome é Alan, sou um desenvolvedor Full Stack júnior com formação em Análise e Desenvolvimento de Sistemas. Atualmente, trabalho com o desenvolvimento de aplicações web para a área de comunicação e bots, utilizando tecnologias como Reactjs, Nodejs e serviços da plataforma Twilio.",
      p3: "Além da minha experiência como desenvolvedor, também atuei como analista de negócios. Participei ativamente no processo de desenvolvimento de novas funcionalidades para aplicações, além de estar envolvido na implantação de software para novos clientes.",
      p4: "Sou graduado em Engenharia Agronômica pela Universidade de São Paulo (ESALQ - USP). Durante meus estudos, tive a oportunidade de receber uma bolsa do programa Ciência Sem Fronteiras para estudar na Universidade de Nebraska - Lincoln, nos Estados Unidos.",
    },
    skills: {
      title: "Minhas Habilidades ___",
    },
    projects: {
      title: "Projetos Recentes ___",
      fdbCons: {
        subtitle: "FDB Consulting",
        p1: "Uma plataforma de orcamentação para fazendas e empresas do agronegócio, tem como principal objetivo auxiliar produtores rurais e gerentes agrícolas no processo de planejamento das operações e no desenvolvimento de um orçamento de maior precisão para safras futuras.",
        p2: " As principais tecnologias utilizadas no projeto são a biblioteca React para o frontend e a plataforma Firebase para o backend.",
      },
    },
    contact: {
      title: "Entre em Contato ___",
      subtitle: "Gostaria de falar comigo?",
      p1: "Eu adoraria receber o seu contato. Sinta-se à vontade para me enviar uma mensagem abaixo.",
      formName: "Nome *",
      formEmail: "E-mail *",
      formMessage: "Menssagem *",
      formButton: "Enviar",
    },
    footer: {
      message: "Todos os direitos reservados",
    },
  };

  useEffect(() => {
    if (isEnglish) {
      setLanguage(EnglishTheme);
    } else {
      setLanguage(PortugueseTheme);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEnglish]);

  const changeLanguage = (newLanguage) => {
    if (newLanguage == isEnglish) return;
    loading();
    setIsEnglish(newLanguage);
  };

  return (
    <SiteContext.Provider
      value={{language: language, changeLanguage: changeLanguage, isLoading}}
    >
      {children}
    </SiteContext.Provider>
  );
};

export default PageContext;
