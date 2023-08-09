import { Button } from "../Button";
import * as S from "./styles";

interface CardProps {
  image: string;
  title: string;
  description: string;
}

export const Card = ({ image, title, description }: CardProps) => {
  return (
    <S.Container>
      <img src={image} alt="" />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <Button>
        <span>Adicionar ao carrinho</span>
      </Button>
    </S.Container>
  );
};
