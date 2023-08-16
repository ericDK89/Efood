import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "../../components/Food/Card";
import { Header } from "../../components/Food/Header";
import { Container } from "../../styles";
import { api } from "../../utils/api";
import * as S from "./styles";

export const Cart = () => {
  const [foods, setFoods] = useState<Foods[]>();
  const [hero, setHero] = useState("");

  const { id } = useParams();

  useEffect(() => {
    api.get(`restaurantes/${id}`).then((res) => setFoods(res.data.cardapio));
    api.get(`restaurantes/${id}`).then((res) => setHero(res.data.capa));
  }, [id]);

  if (!foods) {
    return <h3>Carregando...</h3>;
  }

  return (
    <div>
      <Header hero={hero} />

      <Container>
        <S.CartContainer>
          {foods.map((food) => {
            return (
              <Card
                key={food.id}
                descricao={food.descricao}
                foto={food.foto}
                nome={food.nome}
                porcao={food.porcao}
                preco={food.preco}
              />
            );
          })}
        </S.CartContainer>
      </Container>
    </div>
  );
};
