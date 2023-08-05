import {styled, css} from "styled-components";

export const ProjectsContainer = styled.div`
  width: 100%;
  background-color: #111111;
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
`;

export const Title = styled.h1`
  background-color: inherit;
  font-family: "Lato", sans-serif;
  font-weight: bold;
  font-size: 2rem;
  color: #28d07e;
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

export const ProjectsSection = styled.section`
  display: flex;
  align-items: start;
  justify-content: center;
`;

export const SubTitle = styled.p`
  font-family: "Lato", sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  color: #28d07e;
`;

export const Frame = styled.div`
  flex: 1;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: #000 -10px 10px 10px 2px;
  position: relative;
  opacity: 0;
  filter: blur(5px);
  transform: translateY(10%);
  transition: 1s ease-in;
  ${(props) =>
    props.animation == "true" &&
    css`
      opacity: 1;
      filter: blur(0);
      transform: translateY(0%);
    `}
`;

export const ProjectsIgm = styled.img`
  width: 100%;
  height: auto;
  background: none;
`;

export const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 20px;
  padding: 20px;

  background-color: rgb(0, 0, 0, 0.9);
  backdrop-filter: blur(5px);

  @media (min-width: 590px) {
    position: absolute;
    right: 0;
    top: 0;
    left: 0;
    bottom: 0;
    opacity: 0;
    filter: blur(5px);
    transition: 500ms ease-in;
    &:hover {
      filter: blur(0px);
      opacity: 1;
    }
  }
`;

export const TextConatiner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Text = styled.p`
  font-family: "Lato", sans-serif;
  font-size: 1rem;
  color: rgb(240, 240, 240);
  line-height: 1.5;
`;

export const ConnectContainer = styled.div`
  display: flex;
  gap: 15px;
`;

export const ConnectLink = styled.a`
  flex: 1;
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
