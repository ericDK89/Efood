import { Card } from "../../components/Home/Card";
import { Header } from "../../components/Home/Header";
import { Container } from "../../styles";
import { api } from "../../utils/api";
import * as S from "./styles";

export const Home = () => {
  const { data: restaurants, isLoading } = api.useGetRestaurantsQuery();

  if (isLoading) {
    return <h3>Carregando...</h3>;
  }

  return (
    <>
      <Header />

      <Container>
        <S.HomeContainer>
          {restaurants!.map((restaurant) => {
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
