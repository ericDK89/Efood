import { styled } from "styled-components";
import { defaultTheme } from "../../styles";

export const CheckoutContainer = styled.div`
  h3 {
    color: ${defaultTheme["white-100"]};
    font-weight: 700;
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`;

export const ButtonsDiv = styled.div`
  margin-top: 24px;
`;

export const InputContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  margin-bottom: 8px;

  label {
    font-weight: 700;
    color: ${defaultTheme["white-100"]};
    font-size: 0.875rem;
  }

  input {
    padding: 0.5rem;

    color: ${defaultTheme["black-500"]};
    font-weight: bold;
    font-size: 0.875rem;

    border: none;

    outline: 3px solid transparent;

    &.error {
      outline: 3px solid ${defaultTheme["red-500"]};
    }
  }
`;

export const CEPnNumberDiv = styled.div`
  display: flex;
  gap: 34px;

  input {
    width: 100%;
  }
`;

export const CardNumberCardCodeDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 25%;
  gap: 1.875rem;
`;

export const MonthYearDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.125rem;

  input {
    max-width: 155px;
    width: 100%;
  }
`;

export const OrderIdDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.125rem;
  color: ${defaultTheme["white-100"]};

  h3 {
    font-weight: 700;
    font-size: 1rem;
  }

  p {
    font-size: 0.875rem;
    line-height: 1.375rem;
  }
`;
