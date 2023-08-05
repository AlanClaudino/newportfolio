import {styled, css} from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  min-height: 70px;
  padding-top: 5px;
  position: fixed;
  z-index: 100;
  background-color: rgb(12, 12, 12, 0.8);
  backdrop-filter: blur(10px);
`;

export const Container = styled.div`
  padding: 0 10px;
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  display: flex;
  min-height: 70px;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  position: relative;
`;

export const HeaderSection = styled.section`
  display: flex;
  align-items: center;
  gap: 50px;
  max-height: 70px;
  justify-self: end;
`;

export const Logo = styled.p`
  font-size: 20px;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  color: #28d07e;
`;

export const LogoImg = styled.img`
  height: 20px;
`;

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  gap: 40px;
  padding: 0 10px;
  flex-wrap: wrap;
  @media (max-width: 900px) {
    position: absolute;
    top: 0;
    left: 0;
    align-items: start;
    flex-direction: column;
    border-bottom: 1px solid #fff;
    background-color: rgb(12, 12, 12, 0.8);
    backdrop-filter: blur(10px);
    padding: 90px 50px 0 20px;
    height: 100vh;
    gap: 20px;
    z-index: -1;
    transform: translateX(-100%);
    transition: 500ms ease-out;
    ${(props) =>
      props.isOpen == "true" &&
      css`
        transform: translateX(0);
      `}
  }
`;

export const NavItem = styled.div`
  font-family: "Lato", sans-serif;
  font-size: 1rem;
  color: #e1e1e1;
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  gap: 5px;
  color: inherit;
  text-decoration: none;
  &:hover {
    color: #28d07e;
    cursor: pointer;
  }
`;

export const NavButton = styled.button`
  color: #e1e1e1;
  background-color: inherit;
  border: none;
  padding: 10px;
  display: none;
  &:hover {
    background-color: none;
    color: #e1e1e1;
    cursor: pointer;
  }
  @media (max-width: 900px) {
    display: block;
  }
`;

export const LanguageSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const LanguageButton = styled.button`
  background-color: inherit;
  border: none;
  &:active {
    border-style: none;
  }
  &:focus-visible {
    outline: none;
  }
  &:hover {
    cursor: pointer;
  }
`;
