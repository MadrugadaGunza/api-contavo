import mongoose from "mongoose";

const ShoppingSchema = new mongoose.Schema(
    {
        file: {
            type: String
        },
        product: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        supplier: {
            type: String,
            required: true
        },
        nif_supplier: {
            type: String,
            required: true
        },
        contact_supplier: {
            type: String
        },
        unit_price: {
            type: Number,
            required: true
        },
        amount: {
            type: Number,
            required: true
        },
        iva: {
            type: String
        },
        total_price: {
            type: Number,
            required: true
        },
        status: {
            type: String,
            required: true
        },
        payment_method: {
            type: String,
            required: true
        },
        description: {
            type: String
        }
    },
    { timestamps: true }
);

const Shopping = mongoose.model("Shopping", ShoppingSchema);
export default Shopping;
