import { styled } from "styled-components";
import { defaultTheme } from "../../styles";
import { CheckoutContainer } from "../Checkout/styles";
import { ButtonContainer } from "../Food/Button/styles";

export const SidebarContainer = styled.aside`
  position: fixed;
  top: 0;
  right: 0;

  width: 360px;
  height: 100%;

  padding: 2rem 0.5rem;

  z-index: 2;

  background-color: ${defaultTheme["pink-500"]};

  display: block;

  ${CheckoutContainer} {
    margin-bottom: 24px;
  }

  ${ButtonContainer} {
    padding: 0.25rem;
    width: 100%;
    margin-bottom: 0.5rem;

    font-weight: 700;
    font-size: 0.875rem;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  li {
    display: flex;
    padding: 0.5rem 0.5rem 0.75rem;
    background: ${defaultTheme["pink-300"]};
  }

  div {
    margin-left: 0.5rem;
  }

  h3 {
    margin-bottom: 1rem;
    color: ${defaultTheme["pink-500"]};
    font-weight: 900;
    font-size: 1.125rem;
  }

  span {
    display: block;
    color: ${defaultTheme["pink-500"]};
    font-size: 0.875rem;
  }

  button {
    margin-top: auto;
    margin-left: auto;

    border: 1px solid transparent;
    background-color: transparent;

    transition: border 0.3s;

    line-height: 0;

    &:hover {
      border: 1px solid ${defaultTheme["pink-500"]};
    }
  }
`;

export const ItemImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 2.5rem;
  margin-bottom: 1.25rem;

  strong,
  span {
    color: ${defaultTheme["white-100"]};
    font-size: 0.875rem;
  }
`;

export const EmptyCartText = styled.p`
  width: 240px;
  margin: 0 auto;
  font-size: 0.875rem;
  color: ${defaultTheme["white-100"]};
  text-align: center;
`;
