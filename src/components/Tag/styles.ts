import { styled } from "styled-components";
import { TagProps } from ".";
import { defaultTheme } from "../../styles";

export const TagContainer = styled.span<TagProps>`
  padding: ${(props) => (props.padding === "link" ? "4px 6px" : "6px 4px")};

  font-size: ${(props) => (props.fontSize === "link" ? "0.875rem" : "0.75rem")};
  font-weight: 700;

  border: none;

  color: ${defaultTheme["pink-300"]};
  background-color: ${defaultTheme["pink-500"]};
`;
