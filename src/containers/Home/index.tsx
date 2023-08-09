import { Link } from "react-router-dom";
import { Card } from "../../components/Home/Card";
import { Header } from "../../components/Home/Header";
import { Container } from "../../styles";
import * as S from "./styles";

export const Home = () => {
  return (
    <>
      <Header />

      <Container>
        <S.HomeContainer>
          <Link to="/cart">
            <Card />
          </Link>
          <Link to="/cart">
            <Card />
          </Link>
          <Link to="/cart">
            <Card />
          </Link>
          <Link to="/cart">
            <Card />
          </Link>
        </S.HomeContainer>
      </Container>
    </>
  );
};
