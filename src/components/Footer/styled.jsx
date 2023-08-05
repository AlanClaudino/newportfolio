import {styled} from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  min-height: 70px;
  padding-top: 5px;
  background-color: rgb(12, 12, 12, 0.8);
  backdrop-filter: blur(10px);
  background-color: #111111;
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  min-height: 70px;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
`;

export const IconContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
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

export const FooterText = styled.small`
  color: #e1e1e1;
  font-size: 0.75rem;
  text-align: center;
  font-family: "Lato", sans-serif;
`;
