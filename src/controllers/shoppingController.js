import { createShoppingService, findAllShoppingService, findShoppingByIdService } from "../services/shoppingService.js";

export const createShopping = async (req, res) => {
    try {
        const { product, category, supplier, nif_supplier, contact_supplier, unit_price, amount, iva, total_price, status, payment_method, description } = req.body;
        const filePath = req.file ? `/uploads/${req.file.filename}` : null;

        const shopping = await createShoppingService({ file: filePath, product, category, supplier, nif_supplier, contact_supplier, unit_price, amount, iva, total_price, status, payment_method, description });

        res.status(201).json({ message: "Compra registada com sucesso!", data: shopping });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erro ao registar compra", error });
    }
};

export const findAllShopping = async (req, res) => {
    try {
        const shoppings = await findAllShoppingService().sort({ _id: -1 });
        if (!shoppings || shoppings.length === 0) return res.status(400).send({ error: true, message: "Nenhuma compra foi encontrada" });

        res.status(200).json({
            message: "Lista de compras carregada com sucesso",
            data: shoppings.map((item) => ({
                id: item._id,
                file: item.file,
                product: item.product,
                category: item.category,
                supplier: item.supplier,
                nif_supplier: item.nif_supplier,
                contact_supplier: item.contact_supplier,
                unit_price: item.unit_price,
                amount: item.amount,
                iva: item.iva,
                total_price: item.total_price,
                status: item.status,
                payment_method: item.payment_method,
                description: item.description,
                createdAt: item.createdAt,
                updatedAt: item.updatedAt
            }))
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erro ao listar compras", error: error.message });
    }
};

export const findShoppingById = async (req, res) => {
    try {
        const { id } = req.params;

        const shopping = await findShoppingByIdService(id);
        if (!shopping) return res.status(404).json({ error: true, message: "Compra não encontrada" });

        res.status(200).json({
            message: "Compra carregada com sucesso",
            data: {
                id: shopping._id,
                file: shopping.file,
                product: shopping.product,
                category: shopping.category,
                supplier: shopping.supplier,
                nif_supplier: shopping.nif_supplier,
                contact_supplier: shopping.contact_supplier,
                unit_price: shopping.unit_price,
                amount: shopping.amount,
                iva: shopping.iva,
                total_price: shopping.total_price,
                status: shopping.status,
                payment_method: shopping.payment_method,
                description: shopping.description,
                createdAt: shopping.createdAt,
                updatedAt: shopping.updatedAt
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erro ao buscar compra pelo ID", error: error.message });
    }
};

