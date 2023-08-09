import { styled } from "styled-components";
import { defaultTheme } from "../../../styles";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  padding: 0.5rem;

  background-color: ${defaultTheme["pink-500"]};
`;

export const Title = styled.h3`
  color: ${defaultTheme["pink-100"]};
  font-size: 1rem;
  font-weight: 900;
`;

export const Description = styled.p`
  color: ${defaultTheme["pink-100"]};
  font-size: 0.875rem;
  line-height: 1.375rem;
`;
