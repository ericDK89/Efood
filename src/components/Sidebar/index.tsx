import { useDispatch, useSelector } from "react-redux";
import removeImg from "../../assets/remove.svg";
import { RootReducer } from "../../store";
import { remove } from "../../store/reducer/cart";
import { formatPrice } from "../../utils/formatPrice";
import { Button } from "../Food/Button";
import * as S from "./styles";

export const Sidebar = () => {
  const { items } = useSelector((state: RootReducer) => state.cart);
  const dispatch = useDispatch();

  const getFullPrice = () => {
    return items.reduce((acc, item) => {
      return (acc += item.preco);
    }, 0);
  };

  const handleRemoveFood = (id: number) => {
    dispatch(remove(id));
  };

  return (
    <S.SidebarContainer>
      <S.List>
        {items.map((food) => {
          return (
            <li key={food.id}>
              <S.ItemImage src={food.foto} alt="" />

              <div>
                <h3>{food.nome}</h3>
                <span>{formatPrice(food.preco)}</span>
              </div>

              <button
                onClick={() => handleRemoveFood(food.id)}
                type="button"
                title="Excluir"
              >
                <img src={removeImg} />
              </button>
            </li>
          );
        })}
      </S.List>

      <S.Info>
        <strong>Valor total</strong>
        <span>{formatPrice(getFullPrice())}</span>
      </S.Info>

      <Button handleClick={() => alert("Continuar comprando")}>
        <span>Continuar com a entrega</span>
      </Button>
    </S.SidebarContainer>
  );
};
