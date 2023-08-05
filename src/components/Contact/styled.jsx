import {styled, css} from "styled-components";

export const ContactContainer = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  background-color: inherit;
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 20px;
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
  transition: 1s ease-in;
  ${(props) =>
    props.animation == "true" &&
    css`
      opacity: 1;
      filter: blur(0);
    `}
`;

export const FormTextContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 25px;
`;

export const TextSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 10px;
  padding: 0px 10px;
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

export const SubTitle = styled.p`
  font-family: "Lato", sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  color: #e1e1e1;
`;

export const Text = styled.p`
  font-family: "Lato", sans-serif;
  font-size: 1rem;
  color: #e1e1e1;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  background-color: #111111;
  box-shadow: #000 -10px 10px 10px 2px;
  border-radius: 10px;
  opacity: 0;
  transform: translate(5%, -5%);
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

export const FormSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 20px;
  flex-wrap: wrap;
`;

export const Input = styled.input`
  flex: 1;
  font-family: "Lato", sans-serif;
  font-size: 1rem;
  color: #e1e1e1;
  border: none;
  border-bottom: 1px solid #e1e1e149;
  padding: 10px;
  background-color: inherit;
  &:focus-visible {
    outline: none;
    border-bottom: 1px solid #28d07e;
  }
  @media (min-width: 460px) {
    min-width: 250px;
  }
`;

export const TextArea = styled.textarea`
  font-family: "Lato", sans-serif;
  width: 100%;
  font-size: 1rem;
  color: #e1e1e1;
  border: none;
  border-bottom: 1px solid #e1e1e149;
  padding: 10px;
  background-color: inherit;
  border-radius: 5px;
  &:focus-visible {
    outline: none;
    border: 1px solid #28d07e;
  }
`;

export const SendButton = styled.button`
  font-family: "Lato", sans-serif;
  min-width: 100px;
  text-align: center;
  font-weight: bold;
  font-size: 1rem;
  color: #111111;
  background-color: #28d07e;
  border: none;
  padding: 10px;
  &:hover {
    background-color: rgb(70, 238, 156);
    color: #111111;
    cursor: pointer;
  }
`;
