import { styled } from "styled-components";
import { defaultTheme } from "../../../styles";

export const ButtonContainer = styled.button`
  padding: 4px;

  color: ${defaultTheme["pink-500"]};
  font-size: 0.875rem;

  background-color: ${defaultTheme["pink-100"]};
  border: none;

  transition: outline 0.2s;

  &:hover {
    outline: 1px solid ${defaultTheme["pink-100"]};
  }
`;
