import { Link } from "react-router-dom";
import food from "../../../assets/food.png";
import star from "../../../assets/star.png";
import { Tag } from "../../Tag";
import * as S from "./styles";

export const Card = () => {
  return (
    <S.CardContainer>
      <S.ImageContent>
        <img className="nada" src={food} alt="Comida" />
        <S.Infos>
          <Tag fontSize="tag" padding="tag">
            <span>Destaque da semana</span>
          </Tag>
          <Tag fontSize="tag" padding="tag">
            <span>Italiana</span>
          </Tag>
        </S.Infos>
      </S.ImageContent>

      <div style={{ padding: "0.75rem 0.5rem" }}>
        <S.TitleContent>
          <S.Title>La Dolce Vita Trattoria</S.Title>
          <S.StarContent>
            <S.Title as="span">4.9</S.Title>
            <img src={star} alt="Estrela" />
          </S.StarContent>
        </S.TitleContent>

        <S.Description>
          A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você!
          Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis,
          tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e
          sabor inesquecível. Peça já!
        </S.Description>

        <Tag fontSize="link" padding="link">
          <Link to="#" title="Clique aqui para saber mais">
            Saiba mais
          </Link>
        </Tag>
      </div>
    </S.CardContainer>
  );
};
