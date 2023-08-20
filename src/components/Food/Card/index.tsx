import { useState } from "react";
import { useDispatch } from "react-redux";
import close from "../../../assets/close.svg";
import { add } from "../../../store/reducer/cart";
import { formatPrice } from "../../../utils/formatPrice";
import { Button } from "../Button";
import { ButtonContainer } from "../Button/styles";
import * as S from "./styles";

interface CardProps extends Food {}

export const Card = (props: CardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(add(props));
  };

  return (
    <>
      <S.Container>
        <img src={props.foto} alt="" onClick={() => setIsModalOpen(true)} />

        <S.Title>{props.nome}</S.Title>
        <S.Description>
          {props.descricao.length >= 95
            ? props.descricao.slice(0, 95).concat("...")
            : props.descricao}
        </S.Description>
        <Button handleClick={() => setIsModalOpen(true)}>
          <span>Adicionar ao carrinho</span>
        </Button>
      </S.Container>

      {isModalOpen && (
        <S.Modal>
          <S.ModalContent>
            <img src={props.foto} alt="" className="modalImg" />

            <div>
              <S.ModalTitle>{props.nome}</S.ModalTitle>
              <S.ModalDescription>{props.descricao}</S.ModalDescription>

              <S.ModalDescription>Serve: {props.porcao}</S.ModalDescription>

              <ButtonContainer>
                <span onClick={handleAddToCart}>
                  Adicionar ao carrinho - {formatPrice(props.preco)}
                </span>
              </ButtonContainer>
            </div>

            <S.CloseBtn type="button" onClick={() => setIsModalOpen(false)}>
              <img src={close} alt="" title="Fechar" />
            </S.CloseBtn>
          </S.ModalContent>

          <S.CloseModalDiv onClick={() => setIsModalOpen(false)} />
        </S.Modal>
      )}
    </>
  );
};
