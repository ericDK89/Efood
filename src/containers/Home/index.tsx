import { useEffect, useState } from "react";
import { Card } from "../../components/Home/Card";
import { Header } from "../../components/Home/Header";
import { Container } from "../../styles";
import { api } from "../../utils/api";
import * as S from "./styles";

export const Home = () => {
  const [restaurants, setRestaurants] = useState<Restaurants[]>();

  useEffect(() => {
    api.get("restaurantes").then((res) => setRestaurants(res.data));
  }, []);

  if (!restaurants) {
    return <h3>Carregando...</h3>;
  }

  return (
    <>
      <Header />

      <Container>
        <S.HomeContainer>
          {restaurants.map((restaurant) => {
            return (
              <Card
                key={restaurant.id}
                id={restaurant.id}
                descricao={restaurant.descricao}
                capa={restaurant.capa}
                avaliacao={restaurant.avaliacao}
                titulo={restaurant.titulo}
                tipo={restaurant.tipo}
                destacado={restaurant.destacado}
              />
            );
          })}
        </S.HomeContainer>
      </Container>
    </>
  );
};
