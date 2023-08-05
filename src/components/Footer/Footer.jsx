import {FaGithub, FaLinkedin} from "react-icons/fa";
import {
  ConnectLink,
  Container,
  FooterContainer,
  FooterText,
  IconContainer,
} from "./styled";

import {HiMail} from "react-icons/hi";
import {usePageContext} from "../../context/context";

const Footer = () => {
  const {language} = usePageContext();
  return (
    <FooterContainer>
      <Container>
        <IconContainer>
          <ConnectLink
            href="https://www.linkedin.com/in/alan-claudino/"
            target="blank"
          >
            <FaLinkedin size={22} />
          </ConnectLink>
          <ConnectLink href="https://github.com/AlanClaudino" target="blank">
            <FaGithub size="22" />
          </ConnectLink>
          <ConnectLink
            href="mailto:alanrodrigoclaudino@gmail.com"
            target="blank"
          >
            <HiMail size="25" />
          </ConnectLink>
        </IconContainer>
        <FooterText>
          2023 &copy; Alan Claudino. {language.footer.message}.
        </FooterText>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
