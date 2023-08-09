import { styled } from "styled-components";
import { defaultTheme } from "../../styles";

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 7.5rem;
  padding: 2.5rem 0;

  background-color: ${defaultTheme["pink-300"]};
`;

export const Social = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  img {
    width: 1.5rem;
  }

  margin: 2rem 0 5rem;
`;

export const Text = styled.p`
  width: 480px;
  text-align: center;
  font-size: 0.625rem;
  color: ${defaultTheme["pink-500"]};
`;
