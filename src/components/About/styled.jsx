import {styled, css} from "styled-components";

export const SkillsContainer = styled.div`
  width: 100%;
  background-color: #111111;
`;

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 70px 10px;
  flex-wrap: wrap;
  gap: 40px;
`;

export const RightContainer = styled.section`
  flex: 1;
  min-width: 300px;
  gap: 20px;
  padding: 0 20px;
  background-color: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  filter: blur(5px);
  transition: 1.5s ease-in;
  ${(props) =>
    props.animation == "true" &&
    css`
      opacity: 1;
      filter: blur(0);
    `}
`;

export const LeftContainer = styled.section`
  flex: 1;
  min-width: 300px;
  padding: 0px 35px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-family: "Lato", sans-serif;
  font-weight: bold;
  font-size: 2rem;
  color: #28d07e;
`;

export const Text = styled.p`
  font-family: "Lato", sans-serif;
  font-size: 1rem;
  color: #e1e1e1;
  line-height: 1.8;
`;

export const TextContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const AboutImg = styled.img`
  width: 100%;
  height: auto;
  background: none;
`;

export const Frame = styled.div`
  background-image: radial-gradient(
    rgb(75, 75, 75),
    rgb(50, 50, 50),
    rgb(30, 30, 30),
    rgb(12, 12, 12)
  );
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 350px;
  /* padding: 10px 10px 0 0px; */
  box-shadow: #000 -10px 10px 10px 2px, #111111 15px 15px 0px 8px,
    #28d07e 15px 15px 0px 10px;
  position: relative;
  opacity: 0;
  filter: blur(5px);
  transform: translateY(10%);
  transition: 1.5s ease-in;
  ${(props) =>
    props.animation == "true" &&
    css`
      opacity: 1;
      filter: blur(0px);
      transform: translateX(0%);
    `}
`;
