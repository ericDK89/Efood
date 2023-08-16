import { Link } from "react-router-dom";
import star from "../../../assets/star.png";
import { Tag } from "../../Tag";
import * as S from "./styles";

interface CardProps extends Restaurants {}

export const Card = (props: CardProps) => {
  return (
    <S.CardContainer>
      <S.ImageContent>
        <Link to={`food/${props.id}`} title="Clique aqui para saber mais">
          <img className="nada" src={props.capa} alt="Comida" />
        </Link>

        <S.Infos>
          <Tag fontSize="tag" padding="tag">
            <span>{props.tipo}</span>
          </Tag>
        </S.Infos>
      </S.ImageContent>

      <div style={{ padding: "0.75rem 0.5rem" }}>
        <S.TitleContent>
          <S.Title>{props.titulo}</S.Title>
          <S.StarContent>
            <S.Title as="span">{props.avaliacao}</S.Title>
            <img src={star} alt="Estrela" />
          </S.StarContent>
        </S.TitleContent>

        <S.Description>{props.descricao}</S.Description>

        <Tag fontSize="link" padding="link">
          <Link to={`food/${props.id}`} title="Clique aqui para saber mais">
            Saiba mais
          </Link>
        </Tag>
      </div>
    </S.CardContainer>
  );
};
