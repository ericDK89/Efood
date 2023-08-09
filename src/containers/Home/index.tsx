import { Card } from "../../components/Home/Card";
import { Header } from "../../components/Home/Header";
import { Container } from "../../styles";
import { restaurants } from "../../utils/restaurants";
import * as S from "./styles";

export const Home = () => {
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
                description={restaurant.description}
                image={restaurant.image}
                rating={restaurant.rating}
                title={restaurant.title}
                tags={restaurant.tags}
                site={restaurant.site}
              />
            );
          })}
        </S.HomeContainer>
      </Container>
    </>
  );
};
