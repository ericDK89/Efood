import pizza from "../../../assets/pizza.png";
import { Button } from "../Button";
import * as S from "./styles";

export const Card = () => {
  return (
    <S.Container>
      <img src={pizza} alt="" />
      <S.Title>Pizza Marguerita</S.Title>
      <S.Description>
        A clássica Marguerita: molho de tomate suculento, mussarela derretida,
        manjericão fresco e um toque de azeite. Sabor e simplicidade!
      </S.Description>
      <Button>
        <span>Adicionar ao carrinho</span>
      </Button>
    </S.Container>
  );
};
