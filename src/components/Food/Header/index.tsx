import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { Container } from "../../../styles";
import * as S from "./styles";

interface HeaderProps {
  hero: string;
}

export const Header = ({ hero }: HeaderProps) => {
  return (
    <S.Container>
      <Container>
        <S.Content>
          <S.Text>Restaurantes</S.Text>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <S.Text as="p">0 produto(s) no carrinho</S.Text>
        </S.Content>
      </Container>

      <img className="apresentacao_img" src={hero} alt="" />
    </S.Container>
  );
};
