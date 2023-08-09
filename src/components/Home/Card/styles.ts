import { styled } from "styled-components";
import { defaultTheme } from "../../../styles";

export const CardContainer = styled.section`
  border: 1px solid ${defaultTheme["pink-500"]};
  position: relative;
`;

export const ImageContent = styled.div`
  position: relative;
`;

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;

  display: flex;
  gap: 0.5rem;
`;

export const TitleContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0.5rem 0 1rem;
`;

export const Title = styled.h3`
  color: ${defaultTheme["pink-500"]};
  font-size: 1.125rem;
  font-weight: 700;
`;

export const StarContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Description = styled.p`
  margin-bottom: 1rem;

  color: ${defaultTheme["pink-500"]};
  font-size: 0.875rem;
  line-height: 1.375rem;
`;
