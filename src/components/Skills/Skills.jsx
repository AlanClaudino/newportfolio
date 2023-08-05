import {FaServer, FaTools, FaLaptopCode} from "react-icons/fa";

import {
  Container,
  SkillsSection,
  SkillsContainer,
  Title,
  SkillsSubcontainer,
  IconContainer,
  SubTitle,
  TextContainer,
  Text,
} from "./styled";
import {useEffect, useState} from "react";
import {usePageContext} from "../../context/context";

const iconSize = 60;

const Skills = () => {
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

    const skills = document.querySelector("#skills");
    console.log(skills);
    observer.observe(skills);
  }, []);
  return (
    <SkillsContainer id="skills">
      <Container>
        <Title animation={animate}>{language.skills.title}</Title>
        <SkillsSection>
          <SkillsSubcontainer animation={animate} position="1">
            <IconContainer>
              <FaLaptopCode size={iconSize} />
            </IconContainer>
            <SubTitle>Front-End</SubTitle>
            <TextContainer>
              <Text>HTML 5</Text>
              <Text>CSS 3</Text>
              <Text>JavaScript</Text>
              <Text>React</Text>
              <Text>Twilio Plugins & Paste</Text>
            </TextContainer>
          </SkillsSubcontainer>
          <SkillsSubcontainer animation={animate} position="2">
            <IconContainer>
              <FaServer size={iconSize} />
            </IconContainer>
            <SubTitle>Back-End</SubTitle>
            <TextContainer>
              <Text>NodeJs</Text>
              <Text>Express</Text>
              <Text>DynamoDB</Text>
              <Text>Firebase</Text>
              <Text>Twilio Serverless</Text>
            </TextContainer>
          </SkillsSubcontainer>
          <SkillsSubcontainer animation={animate} position="3">
            <IconContainer>
              <FaTools size={iconSize} />
            </IconContainer>
            <SubTitle>Tools</SubTitle>
            <TextContainer>
              <Text>Git & Github</Text>
              <Text>AWS S3</Text>
              <Text>Azure DevOps</Text>
              <Text>Xano</Text>
              <Text>Twilio Platform</Text>
            </TextContainer>
          </SkillsSubcontainer>
        </SkillsSection>
      </Container>
    </SkillsContainer>
  );
};

export default Skills;
