import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();


const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = async () => {
   const URL= `mongodb+srv://${USERNAME}:${PASSWORD}@whatsappclone.2fdlbfs.mongodb.net/WhatsAppClone?retryWrites=true&w=majority`
   
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true })
        console.log("Database connected Successfully");
    } catch (error) {
        console.log("Connection unsuccessfull", error.message)
    }
}
mongoose.set('strictQuery', false);

export default Connection;