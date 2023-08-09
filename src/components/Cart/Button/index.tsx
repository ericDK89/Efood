import * as S from "./styles";

interface ButtonProps {
  children: JSX.Element;
}

export const Button = ({ children }: ButtonProps) => (
  <S.ButtonContainer>{children}</S.ButtonContainer>
);
