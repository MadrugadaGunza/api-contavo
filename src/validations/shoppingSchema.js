import * as Yup from "yup";

export const shoppingSchema = Yup.object().shape({
    product: Yup.string().required("O produto é obrigatório"),
    category: Yup.string().required("A categoria é obrigatória"),
    supplier: Yup.string().required("O fornecedor é obrigatório"),
    nif_supplier: Yup.string().required("O NIF do fornecedor é obrigatório")
        .min(7, "O NIF deve ter pelo menos 7 dígitos").max(15, "O NIF deve ter no máximo 15 dígitos"),
    contact_supplier: Yup.string().optional(),
    unit_price: Yup.number().required("O preço unitário é obrigatório").min(0, "Preço unitário inválido"),
    amount: Yup.number().required("A quantidade é obrigatória").integer("Quantidade deve ser um número inteiro").min(1, "Quantidade mínima é 1"),
    iva: Yup.string().required("O IVA é obrigatório"),
    total_price: Yup.number().required("O valor total é obrigatório").min(0, "Valor total inválido"),
    status: Yup.string().required("O status é obrigatório").oneOf(["pago", "pendente", "cancelado"], "Status inválido"),
    payment_method: Yup.string().optional().oneOf(["dinheiro", "transferencia", "cartao", "outro"], "Método de pagamento inválido"),
    description: Yup.string().optional()
});
