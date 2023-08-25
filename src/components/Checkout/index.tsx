import { useFormik } from "formik";
import { FormEvent, useState } from "react";
import ReactInputMask from "react-input-mask";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../store";
import { clear } from "../../store/reducer/cart";
import { defaultTheme } from "../../styles";
import { CreateAddressSchema } from "../../utils/addressSchema";
import { api } from "../../utils/api";
import { formatPrice } from "../../utils/formatPrice";
import { Button } from "../Food/Button";
import * as S from "./styles";

interface CheckoutProps {
  isPurchasing: boolean;
  handleCancelFoodPurchase: () => void;
  handleCloseSidebar: () => void;
}

export const Checkout = ({
  isPurchasing,
  handleCancelFoodPurchase,
  handleCloseSidebar,
}: CheckoutProps) => {
  const [isFinishingPurchase, setIsFinishingPurchase] = useState(false);
  const [isPurchaseDone, setIsPurchaseDone] = useState(false);
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootReducer) => state.cart);

  const [purchase, { data, isLoading }] = api.usePostPurchaseFoodMutation();

  const getFullPrice = () => {
    return items.reduce((acc, item) => {
      return (acc += item.preco);
    }, 0);
  };

  const donePurchase = () => {
    setIsFinishingPurchase(false);
    setIsPurchaseDone(false);
    handleCancelFoodPurchase();
    handleCloseSidebar();
    dispatch(clear());
  };

  const form = useFormik({
    initialValues: {
      id: 0,
      price: 0,
      receiver: "",
      description: "",
      city: "",
      zipCode: "",
      number: 0,
      complement: "",
      cardName: "",
      cardNumber: "",
      cardCode: "",
      expiresMonth: "",
      expiresYear: "",
    },
    validationSchema: CreateAddressSchema,
    onSubmit: (values) => {
      purchase({
        products: [
          {
            id: 1,
            price: 1,
          },
        ],
        delivery: {
          receiver: values.receiver,
          address: {
            description: values.description,
            city: values.city,
            number: values.number,
            zipCode: values.zipCode,
            complement: values.complement,
          },
        },
        payment: {
          card: {
            code: values.cardCode,
            expires: {
              month: values.expiresMonth,
              year: values.expiresYear,
            },
            name: values.cardName,
            number: values.cardNumber,
          },
        },
      });
    },
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await form.submitForm();

    if (form.isValid) {
      setIsPurchaseDone(true);
    }
  };

  const checkIfInputHasErro = (fieldName: string) => {
    const isTouched = fieldName in form.touched;
    const isInvalid = fieldName in form.errors;
    const hasError = isTouched && isInvalid;

    return hasError;
  };

  return (
    <>
      <S.CheckoutContainer as="form" onSubmit={handleSubmit}>
        {isPurchasing && !isFinishingPurchase && !isPurchaseDone && (
          <>
            <h3>Entrega</h3>

            <S.InputContent>
              <label htmlFor="receiver">Quem irá receber</label>
              <input
                type="text"
                name="receiver"
                id="receiver"
                value={form.values.receiver}
                onChange={form.handleChange}
                className={checkIfInputHasErro("receiver") ? "error" : ""}
                required
              />
            </S.InputContent>

            <S.InputContent>
              <label htmlFor="description">Endereço</label>
              <input
                type="text"
                name="description"
                id="description"
                value={form.values.description}
                onChange={form.handleChange}
                className={checkIfInputHasErro("description") ? "error" : ""}
                required
              />
            </S.InputContent>

            <S.InputContent>
              <label htmlFor="city">Cidade</label>
              <input
                type="text"
                name="city"
                id="city"
                value={form.values.city}
                onChange={form.handleChange}
                className={checkIfInputHasErro("city") ? "error" : ""}
                required
              />
            </S.InputContent>

            <S.CEPnNumberDiv>
              <S.InputContent>
                <label htmlFor="zipCode">CEP</label>
                <ReactInputMask
                  type="text"
                  name="zipCode"
                  id="zipCode"
                  value={form.values.zipCode}
                  onChange={form.handleChange}
                  className={checkIfInputHasErro("zipCode") ? "error" : ""}
                  mask="99999-999"
                  required
                />
              </S.InputContent>

              <S.InputContent>
                <label htmlFor="number">Número</label>
                <input
                  type="number"
                  name="number"
                  id="number"
                  value={form.values.number === 0 ? "" : form.values.number}
                  onChange={form.handleChange}
                  className={checkIfInputHasErro("number") ? "error" : ""}
                />
              </S.InputContent>
            </S.CEPnNumberDiv>

            <S.InputContent>
              <label htmlFor="complement">Complemento (opcional)</label>
              <input
                type="text"
                name="complement"
                id="complement"
                value={form.values.complement}
                onChange={form.handleChange}
                className={checkIfInputHasErro("complement") ? "error" : ""}
              />
            </S.InputContent>

            <S.ButtonsDiv>
              <Button handleClick={() => setIsFinishingPurchase(true)}>
                <span>Continuar com pagamento</span>
              </Button>

              <Button handleClick={() => handleCancelFoodPurchase()}>
                <span>Voltar para o carrinho</span>
              </Button>
            </S.ButtonsDiv>
          </>
        )}

        {isFinishingPurchase && !isPurchaseDone && (
          <>
            <h3>Pagamento - Valor a pagar {formatPrice(getFullPrice())}</h3>

            <S.InputContent>
              <label htmlFor="cardName">Nome no cartão</label>
              <input
                type="text"
                name="cardName"
                id="cardName"
                value={form.values.cardName}
                onChange={form.handleChange}
                className={checkIfInputHasErro("cardName") ? "error" : ""}
              />
            </S.InputContent>

            <S.CardNumberCardCodeDiv>
              <S.InputContent>
                <label htmlFor="cardNumber">Número</label>
                <ReactInputMask
                  type="text"
                  name="cardNumber"
                  id="cardNumber"
                  value={form.values.cardNumber}
                  onChange={form.handleChange}
                  className={checkIfInputHasErro("cardNumber") ? "error" : ""}
                  mask="9999 9999 9999 9999"
                />
              </S.InputContent>

              <S.InputContent>
                <label htmlFor="cardCode">CVV</label>
                <ReactInputMask
                  type="text"
                  name="cardCode"
                  id="cardCode"
                  value={form.values.cardCode}
                  onChange={form.handleChange}
                  className={checkIfInputHasErro("cardCode") ? "error" : ""}
                  mask="999"
                />
              </S.InputContent>
            </S.CardNumberCardCodeDiv>

            <S.MonthYearDiv>
              <S.InputContent>
                <label htmlFor="expiresMonth">Mês de vencimento</label>
                <ReactInputMask
                  type="text"
                  name="expiresMonth"
                  id="expiresMonth"
                  value={form.values.expiresMonth}
                  onChange={form.handleChange}
                  className={checkIfInputHasErro("expiresMonth") ? "error" : ""}
                  mask="99"
                />
              </S.InputContent>

              <S.InputContent>
                <label htmlFor="expiresYear">Ano de vencimento</label>
                <ReactInputMask
                  type="text"
                  name="expiresYear"
                  id="expiresYear"
                  value={form.values.expiresYear}
                  onChange={form.handleChange}
                  className={checkIfInputHasErro("expiresYear") ? "error" : ""}
                  mask="99"
                />
              </S.InputContent>
            </S.MonthYearDiv>

            <S.ButtonsDiv>
              <Button
                type="submit"
                isDisabled={form.values.receiver.length === 0 && true}
              >
                <span>Finalizar pagamento</span>
              </Button>

              <Button handleClick={() => setIsFinishingPurchase(false)}>
                <span>Voltar para edição de endereço</span>
              </Button>
            </S.ButtonsDiv>
          </>
        )}
      </S.CheckoutContainer>

      {isPurchaseDone &&
        (isLoading ? (
          <h3 style={{ color: defaultTheme["white-100"] }}>
            Carregando seu pedido...
          </h3>
        ) : (
          <S.OrderIdDiv>
            <h3>Pedido realizado - {data!.orderId}</h3>

            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </p>

            <p>
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
            </p>

            <p>
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </p>

            <p>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>

            <S.ButtonsDiv>
              <Button handleClick={() => donePurchase()}>
                <span>Concluir</span>
              </Button>
            </S.ButtonsDiv>
          </S.OrderIdDiv>
        ))}
    </>
  );
};
