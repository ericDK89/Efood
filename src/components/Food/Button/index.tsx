import * as S from "./styles";

interface ButtonProps {
  children: JSX.Element;
  handleClick?: () => void;
  type?: "button" | "submit";
  isDisabled?: boolean;
}

export const Button = ({
  children,
  handleClick,
  type = "button",
  isDisabled = false,
}: ButtonProps) => (
  <S.ButtonContainer type={type} onClick={handleClick} disabled={isDisabled}>
    {children}
  </S.ButtonContainer>
);
