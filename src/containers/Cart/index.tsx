import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "../../components/Food/Card";
import { Header } from "../../components/Food/Header";
import { Sidebar } from "../../components/Sidebar";
import { Container } from "../../styles";
import { api } from "../../utils/api";
import * as S from "./styles";

export const Cart = () => {
  const [foods, setFoods] = useState<Foods[]>();
  const [hero, setHero] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleOpenSidebar = () => {
    setIsSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  const { id } = useParams();

  useEffect(() => {
    api.get(`restaurantes/${id}`).then((res) => setFoods(res.data.cardapio));
    api.get(`restaurantes/${id}`).then((res) => setHero(res.data.capa));
  }, [id]);

  if (!foods) {
    return <h3>Carregando...</h3>;
  }

  return (
    <div>
      <Header hero={hero} handleOpenSidebar={handleOpenSidebar} />

      <Container>
        <S.CartContainer>
          {foods.map((food) => {
            return (
              <Card
                key={food.id}
                descricao={food.descricao}
                foto={food.foto}
                nome={food.nome}
                porcao={food.porcao}
                preco={food.preco}
                id={food.id}
              />
            );
          })}
        </S.CartContainer>
      </Container>

      <div style={isSidebarOpen ? { display: "block" } : { display: "none" }}>
        <Sidebar />
        <S.Overlay onClick={handleCloseSidebar} />
      </div>
    </div>
  );
};
