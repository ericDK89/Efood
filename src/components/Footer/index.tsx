import { Link } from "react-router-dom";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import logo from "../../assets/logo.png";
import twitter from "../../assets/twitter.svg";
import * as S from "./styles";

export const Footer = () => {
  return (
    <S.Container>
      <img src={logo} alt="" />

      <S.Social>
        <Link to="#">
          <img title="Instagram" src={instagram} alt="" />
        </Link>
        <Link to="#">
          <img title="Facebook" src={facebook} alt="" />
        </Link>
        <Link to="#">
          <img title="Twitter" src={twitter} alt="" />
        </Link>
      </S.Social>

      <S.Text>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </S.Text>
    </S.Container>
  );
};
