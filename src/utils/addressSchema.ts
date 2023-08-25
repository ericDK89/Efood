import * as yup from "yup";

export const CreateAddressSchema = yup.object({
  id: yup.number(),
  price: yup.number(),
  receiver: yup
    .string()
    .min(3, "Deve ter pelo menos 3 caracteres")
    .required("Campo obrigatório"),
  description: yup
    .string()
    .min(3, "Deve ter pelo menos 3 caracteres")
    .required("Campo obrigatório"),
  city: yup
    .string()
    .min(2, "Deve ter pelo menos 3 caracteres")
    .required("Campo obrigatório"),
  zipCode: yup
    .string()
    .min(8, "Deve ter 8 caracteres")
    .required("Campo obrigatório"),
  number: yup.number().required("Campo obrigatório"),
  complement: yup.string().optional(),
  cardName: yup
    .string()
    .min(3, "Deve ter pelo menos 3 caracteres")
    .required("Campo obrigatório"),
  cardNumber: yup
    .number()
    .min(16, "Deve ter 16 caracteres")
    .required("Campo obrigatório"),
  cardCode: yup
    .string()
    .min(3, "Deve ter 3 caracteres")
    .required("Campo obrigatório"),
  expiresMonth: yup
    .string()
    .min(2, "Deve ter 2 caracteres")
    .required("Campo obrigatório"),
  expiresYear: yup
    .string()
    .min(2, "Deve ter 2 caracteres")
    .required("Campo obrigatório"),
});
