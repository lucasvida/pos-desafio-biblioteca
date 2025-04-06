import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose.connect(process.env.DB_CONNECT)
        .then(() => { console.log("Conectado ao DB") })
        .catch((erro) => { console.log("Erro ao conectar ao DB" + erro) });
}