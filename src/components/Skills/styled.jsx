import {styled, css} from "styled-components";

export const SkillsContainer = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding: 70px 10px;
`;

export const Title = styled.h1`
  background-color: inherit;
  font-family: "Lato", sans-serif;
  font-weight: bold;
  font-size: 2rem;
  color: #28d07e;
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

export const SkillsSection = styled.section`
  flex: 1;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px 20px;
`;

export const SkillsSubcontainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 280px;
  background-color: #111111;
  padding: 20px;
  border-radius: 10px;
  box-shadow: #000 -10px 10px 10px 2px;
  opacity: 0;
  filter: blur(5px);
  transition: 1200ms ease-in;
  transform: translateY(10%);
  ${(props) =>
    props.animation == "true" &&
    css`
      opacity: 1;
      filter: blur(0px);
      transform: translateY(0);
    `};
`;

export const IconContainer = styled.div`
  color: #28d07e;
  align-self: center;
`;

export const SubTitle = styled.h1`
  align-self: center;
  font-family: "Lato", sans-serif;
  font-weight: bold;
  font-size: 1.5rem;
  color: #e1e1e1;
`;

export const TextContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding-top: 20px;
`;

export const Text = styled.p`
  font-family: "Lato", sans-serif;
  font-size: 1rem;
  color: #e1e1e1;
`;
