import {
  ConnectButton,
  ConnectContainer,
  ConnectLink,
  ConnectSection,
  Container,
  Frame,
  HeroContainer,
  HeroIgm,
  HeroText,
  HighLight,
  LeftSection,
  RightSection,
  SubHeroText,
  Text,
} from "./styled";

import heroImage from "../../assets/hero-img.png";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {usePageContext} from "../../context/context";
import {useEffect, useState} from "react";

const Hero = () => {
  const {language} = usePageContext();

  const [animate, setAnimate] = useState("false");

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setAnimate("true");
      } else {
        setAnimate("false");
      }
    });

    const hero = document.querySelector("#hero");
    observer.observe(hero);
  }, []);

  return (
    <HeroContainer id="hero">
      <Container>
        <LeftSection>
          <Frame animation={animate}>
            <HeroIgm src={heroImage} />
          </Frame>
        </LeftSection>
        <RightSection animation={animate}>
          <Text>{language?.hero.text}</Text>

          <HeroText>
            {language?.hero.greeting}{" "}
            <HighLight>{language?.hero.name}</HighLight>
          </HeroText>

          <SubHeroText>{language?.hero.profession}</SubHeroText>

          <ConnectContainer>
            <ConnectSection>
              <ConnectLink
                href="https://www.linkedin.com/in/alan-claudino/"
                target="blank"
              >
                <FaLinkedin size="22" />
              </ConnectLink>
              <ConnectLink
                href="https://github.com/AlanClaudino"
                target="blank"
              >
                <FaGithub size="22" />
              </ConnectLink>
            </ConnectSection>

            <ConnectSection>
              <ConnectButton href="#contact">
                {language?.hero.contact}
              </ConnectButton>
            </ConnectSection>
          </ConnectContainer>
        </RightSection>
      </Container>
    </HeroContainer>
  );
};

export default Hero;
