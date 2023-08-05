import {styled, css} from "styled-components";

export const HeroContainer = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  padding: 80px 10px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const RightSection = styled.section`
  flex: 1;
  display: flex;
  padding-left: 10px;
  min-width: 300px;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  opacity: 0;
  filter: blur(5px);
  transition: 1s ease-in;
  ${(props) =>
    props.animation == "true" &&
    css`
      opacity: 1;
      filter: blur(0);
    `}
`;

export const Text = styled.p`
  font-family: "Lato", sans-serif;
  font-size: 1rem;
  color: #e1e1e1;
`;

export const HeroText = styled.p`
  font-family: "Lato", sans-serif;
  font-size: 2.5rem;
  color: #e1e1e1;
  @media (min-width: 335px) {
    font-size: 3rem;
  }
`;
export const SubHeroText = styled.p`
  font-family: "Lato", sans-serif;
  font-size: 2rem;
  color: #e1e1e1;
`;

export const HighLight = styled.span`
  color: #28d07e;
`;

export const LeftSection = styled.section`
  flex: 1;
  min-width: 300px;
  padding: 30px 30px 30px 50px;
  display: flex;
  justify-content: center;
`;

export const Frame = styled.div`
  background-image: radial-gradient(
    rgb(75, 75, 75),
    rgb(50, 50, 50),
    rgb(30, 30, 30),
    rgb(12, 12, 12)
  );
  background-size: cover;
  max-width: 345px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: #000 -10px 10px 10px 2px, rgb(12, 12, 12) -30px -15px 0px 8px,
    #28d07e -30px -15px 0px 10px;
  opacity: 0;
  transform: translateY(-10%);
  filter: blur(5px);
  transition: 1s ease-in;
  ${(props) =>
    props.animation == "true" &&
    css`
      opacity: 1;
      transform: translateX(0);
      filter: blur(0);
    `}
`;

export const HeroIgm = styled.img`
  width: 100%;
  height: auto;
  background: none;
`;

export const ConnectSection = styled.section`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const ConnectContainer = styled.section`
  padding: 15px 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ConnectLink = styled.a`
  display: flex;
  align-items: center;
  background-color: none;
  border: none;
  color: #e1e1e1;
  &:hover {
    color: #28d07e;
    cursor: pointer;
  }
`;

export const ConnectButton = styled.a`
  text-decoration: none;
  font-family: "Lato", sans-serif;
  font-weight: bold;
  font-size: 1rem;
  color: #0c0c0c;
  background-color: #28d07e;
  border: none;
  padding: 10px;
  &:hover {
    background-color: rgb(70, 238, 156);
    color: #0c0c0c;
    cursor: pointer;
  }
`;
