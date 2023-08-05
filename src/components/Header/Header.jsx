import {
  Container,
  HeaderContainer,
  HeaderSection,
  LanguageButton,
  LanguageSection,
  Link,
  Logo,
  LogoImg,
  NavButton,
  NavItem,
  Navbar,
} from "./styled";
import logo from "../../assets/logo.svg";
import brazilFlag from "../../assets/flag-brazil.svg";
import usFlag from "../../assets/flag-us.svg";
import {usePageContext} from "../../context/context";
import {HiMenu} from "react-icons/hi";
import {AiFillCloseSquare} from "react-icons/ai";
import {useState} from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {language, changeLanguage} = usePageContext();

  const handleMenu = () => {
    setIsOpen((current) => !current);
  };

  return (
    <HeaderContainer>
      <Container>
        <NavButton onClick={handleMenu}>
          {isOpen ? <AiFillCloseSquare size={30} /> : <HiMenu size={30} />}
        </NavButton>
        <Navbar isOpen={isOpen.toString()}>
          <NavItem>
            <Link href="#hero">{language?.nav.home}</Link>
          </NavItem>
          <NavItem>
            <Link href="#about">{language?.nav.about}</Link>
          </NavItem>
          <NavItem>
            <Link href="#skills">{language?.nav.skills}</Link>
          </NavItem>
          <NavItem>
            <Link href="#projects">{language?.nav.projects}</Link>
          </NavItem>
          <NavItem>
            <Link href="#contact">{language?.nav.contact}</Link>
          </NavItem>
        </Navbar>
        <HeaderSection>
          <LanguageSection>
            <LanguageButton>
              <LogoImg src={brazilFlag} onClick={() => changeLanguage(false)} />
            </LanguageButton>
            <LanguageButton>
              <LogoImg src={usFlag} onClick={() => changeLanguage(true)} />
            </LanguageButton>
          </LanguageSection>
          <Link href="#hero">
            <LogoImg src={logo} />
            <Logo>Claudino</Logo>
          </Link>
        </HeaderSection>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
