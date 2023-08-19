import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { RootReducer } from "../../../store";
import { Container } from "../../../styles";
import * as S from "./styles";

interface HeaderProps {
  hero: string;
  handleOpenSidebar: () => void;
}

export const Header = ({ hero, handleOpenSidebar }: HeaderProps) => {
  const { items } = useSelector((state: RootReducer) => state.cart);

  return (
    <S.Container>
      <Container>
        <S.Content>
          <S.Text>Restaurantes</S.Text>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <S.Text as="p">
            {items.length} produto(s) no{" "}
            <span title="Abrir carrinho" onClick={handleOpenSidebar}>
              carrinho
            </span>
          </S.Text>
        </S.Content>
      </Container>

      <img className="apresentacao_img" src={hero} alt="" />
    </S.Container>
  );
};
