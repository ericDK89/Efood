import * as S from "./styles";

interface ButtonProps {
  children: JSX.Element;
  handleClick: () => void;
}

export const Button = ({ children, handleClick }: ButtonProps) => (
  <S.ButtonContainer onClick={handleClick}>{children}</S.ButtonContainer>
);
