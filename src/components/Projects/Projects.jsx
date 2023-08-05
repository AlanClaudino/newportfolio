import {
  ConnectLink,
  Container,
  Frame,
  Overlay,
  ProjectsContainer,
  ProjectsIgm,
  SubTitle,
  Text,
  TextConatiner,
  Title,
  ConnectContainer,
} from "./styled";
import {usePageContext} from "../../context/context";

import fdbFarm from "../../assets/fdbFarms.png";
import {FaExternalLinkSquareAlt, FaGithub} from "react-icons/fa";
import {useEffect, useState} from "react";

const Projects = () => {
  const [animate, setAnimate] = useState("false");

  const {language} = usePageContext();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setAnimate("true");
      } else {
        setAnimate("false");
      }
    });

    const projects = document.querySelector("#projects");
    observer.observe(projects);
  }, []);

  return (
    <ProjectsContainer id="projects">
      <Container>
        <Title animation={animate}>{language.projects.title}</Title>
        <Frame animation={animate}>
          <ProjectsIgm src={fdbFarm} />
          <Overlay>
            <SubTitle>{language.projects.fdbCons.subtitle}</SubTitle>
            <TextConatiner>
              <Text>{language.projects.fdbCons.p1}</Text>
              <Text>{language.projects.fdbCons.p2}</Text>
            </TextConatiner>
            <ConnectContainer>
              <ConnectLink
                href="https://github.com/AlanClaudino/fdb_consulting"
                target="blank"
              >
                <FaGithub size="22" />
              </ConnectLink>
              <ConnectLink
                href="https://fdbconsulting.netlify.app"
                target="blank"
              >
                <FaExternalLinkSquareAlt size="22" />
              </ConnectLink>
            </ConnectContainer>
          </Overlay>
        </Frame>
      </Container>
    </ProjectsContainer>
  );
};

export default Projects;
