import { styled } from "styled-components";
import heroImg from "../../../assets/fundo.png";
import { defaultTheme } from "../../../styles";

export const Container = styled.header`
  background-image: url(${heroImg});

  .apresentacao_img {
    width: 100%;
    height: 280px;
    object-fit: cover;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 4.0625rem 0;
`;

export const Text = styled.h3`
  color: ${defaultTheme["pink-500"]};
  font-size: 1.125rem;
  font-weight: 900;

  span {
    cursor: pointer;
    text-decoration: underline;
  }
`;
