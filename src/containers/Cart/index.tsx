import { useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "../../components/Food/Card";
import { Header } from "../../components/Food/Header";
import { Sidebar } from "../../components/Sidebar";
import { Container } from "../../styles";
import { api } from "../../utils/api";
import * as S from "./styles";

export const Cart = () => {
  const { id } = useParams();
  const { data: foods, isLoading } = api.useGetFoodsQuery(id!);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleOpenSidebar = () => {
    setIsSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  if (isLoading) {
    return <h3>Carregando...</h3>;
  }

  return (
    <div>
      <Header hero={foods!.capa} handleOpenSidebar={handleOpenSidebar} />

      <Container>
        <S.CartContainer>
          {foods!.cardapio.map((food) => {
            return (
              <Card
                key={food.id}
                descricao={food.descricao}
                foto={food.foto}
                id={food.id}
                nome={food.nome}
                porcao={food.porcao}
                preco={food.preco}
              />
            );
          })}
        </S.CartContainer>
      </Container>

      <div style={isSidebarOpen ? { display: "block" } : { display: "none" }}>
        <Sidebar handleCloseSidebar={handleCloseSidebar} />
        <S.Overlay onClick={handleCloseSidebar} />
      </div>
    </div>
  );
};
