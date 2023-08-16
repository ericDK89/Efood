import { styled } from "styled-components";
import { defaultTheme } from "../../../styles";
import { ButtonContainer } from "../Button/styles";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;

  padding: 0.5rem;

  background-color: ${defaultTheme["pink-500"]};

  img {
    width: 100%;
    aspect-ratio: 16/9;

    &:hover {
      cursor: pointer;
    }
  }
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

export const Modal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.4);

  ${ButtonContainer} {
    font-weight: 700;
  }

  .modalImg {
    width: 280px;
    height: 280px;
    object-fit: cover;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  gap: 1.5rem;

  max-width: 1024px;
  margin: 0 auto;
  padding: 2rem;

  color: ${defaultTheme["white-100"]};
  background-color: ${defaultTheme["pink-500"]};

  position: absolute;
`;

export const ModalTitle = styled.h4`
  font-weight: 900;
  font-size: 1.125rem;
`;

export const ModalDescription = styled.p`
  margin: 1rem 0;
  font-size: 0.875rem;
  line-height: 1.375rem;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;

  background-color: transparent;
  border: none;

  line-height: 0;
`;

export const CloseModalDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;
