import mongoose from "mongoose";

const databaseConnect = () => {
    mongoose.connect("mongodb://localhost:27017/contavo")
        .then(() => console.log("Banco de dados conectado com sucesso!"))
        .catch((error) => console.error(error));
}
export default databaseConnect;