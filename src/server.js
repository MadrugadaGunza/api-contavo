import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import databaseConnect from './database/db.js';
// routes
import shoppingRoutes from "./routes/shoppingRoute.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
databaseConnect();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.use("/api/shopping", shoppingRoutes);

app.listen(PORT, () => { console.log(`Servidor rodando na porta ${PORT}`) });
