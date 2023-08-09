import { styled } from "styled-components";
import heroImg from "../../../assets/fundo.png";
import { defaultTheme } from "../../../styles";

export const Container = styled.header`
  padding: 4rem 0 2.5rem;
  background-image: url(${heroImg});
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8.75rem;
`;

export const Text = styled.p`
  max-width: 540px;

  text-align: center;

  color: ${defaultTheme["pink-500"]};
  font-size: 2.25rem;
  font-weight: 900;
`;
