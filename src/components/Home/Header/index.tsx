import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { Container } from "../../../styles";
import * as S from "./styles";

export const Header = () => {
  return (
    <S.Container>
      <Container>
        <S.Content>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <S.Text>
            Viva experiências gastronômicas no conforto da sua casa
          </S.Text>
        </S.Content>
      </Container>
    </S.Container>
  );
};
