import global from "#config/global.js"
import { mongoose } from "mongoose";

class dbClient {
    constructor() {
        this.uri = `mongodb://${global.USER_DB}:${global.PASS_DB}@${global.SERVER_DB}/${global.NAME_DB}?authSource=${global.AUTH_DB}`;
    }

    async connectDB() {
        try {
            await mongoose.connect(this.uri);
            console.log('Conexión exitosa a MongoDB');
        }
        catch (e) {
            console.error('Error al conectar a MongoDB:', e);
            process.exit(1);
        }
    }
};

export default new dbClient();