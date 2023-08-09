import { Link } from "react-router-dom";
import star from "../../../assets/star.png";
import { Tag } from "../../Tag";
import * as S from "./styles";

interface CardProps {
  id?: string; // temporariamente opcional
  image: string;
  title: string;
  rating: number;
  description: string;
  tags: string[];
  site: string;
}

export const Card = ({
  description,
  image,
  rating,
  title,
  tags,
  site,
}: CardProps) => {
  return (
    <S.CardContainer>
      <S.ImageContent>
        <Link to="cart/">
          {/* to={`cart/${id}`} <== código para abrir página baseado na id */}
          <img className="nada" src={image} alt="Comida" />
        </Link>
        <S.Infos>
          {tags.map((tag, i) => {
            return (
              <Tag fontSize="tag" padding="tag" key={i}>
                <span>{tag}</span>
              </Tag>
            );
          })}
        </S.Infos>
      </S.ImageContent>

      <div style={{ padding: "0.75rem 0.5rem" }}>
        <S.TitleContent>
          <S.Title>{title}</S.Title>
          <S.StarContent>
            <S.Title as="span">{rating}</S.Title>
            <img src={star} alt="Estrela" />
          </S.StarContent>
        </S.TitleContent>

        <S.Description>{description}</S.Description>

        <Tag fontSize="link" padding="link">
          <Link to={site} title="Clique aqui para saber mais" target="__blank">
            Saiba mais
          </Link>
        </Tag>
      </div>
    </S.CardContainer>
  );
};
