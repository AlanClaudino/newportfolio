import {
  AboutImg,
  Container,
  Frame,
  LeftContainer,
  RightContainer,
  SkillsContainer,
  Text,
  TextContainer,
  Title,
} from "./styled";

import aboutImg from "../../assets/about-img.png";
import {usePageContext} from "../../context/context";
import {useEffect, useState} from "react";

const About = () => {
  const [animate, setAnimate] = useState("false");

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setAnimate("true");
      } else {
        setAnimate("false");
      }
    });

    const about = document.querySelector("#about");
    observer.observe(about);
  }, []);

  const {language} = usePageContext();
  return (
    <SkillsContainer id="about">
      <Container>
        <RightContainer animation={animate}>
          <Title>{language.about.title}</Title>
          <TextContainer>
            <Text>{language?.about.p1}</Text>
            <Text>{language?.about.p2}</Text>
            <Text>{language?.about.p3}</Text>
          </TextContainer>
        </RightContainer>
        <LeftContainer>
          <Frame animation={animate}>
            <AboutImg src={aboutImg} />
          </Frame>
        </LeftContainer>
      </Container>
    </SkillsContainer>
  );
};

export default About;
