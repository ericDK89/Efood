import { Card } from "../../components/Cart/Card";
import { Header } from "../../components/Cart/Header";
import { Container } from "../../styles";
import * as S from "./styles";

export const Cart = () => {
  return (
    <div>
      <Header />

      <Container>
        <S.CartContainer>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </S.CartContainer>
      </Container>
    </div>
  );
};
