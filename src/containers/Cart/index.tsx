import { Card } from "../../components/Cart/Card";
import { Header } from "../../components/Cart/Header";
import { Container } from "../../styles";
import { foods } from "../../utils/foods";
import * as S from "./styles";

export const Cart = () => {
  return (
    <div>
      <Header />

      <Container>
        <S.CartContainer>
          {foods.map((food) => {
            return (
              <Card
                key={food.id}
                title={food.title}
                description={food.description}
                image={food.image}
              />
            );
          })}
        </S.CartContainer>
      </Container>
    </div>
  );
};
