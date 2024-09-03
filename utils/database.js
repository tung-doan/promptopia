import mongoose from "mongoose";

let isconnected = false;
export const Connecttodb = async () => {
    mongoose.set('strictQuery', true);
    if(isconnected){
        console.log("Already connected to database");
        return;
    }
    try {
        mongoose.connect(process.env.MONGODB_URL, {
            dbname: 'share_prompt',
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        isconnected = true;
        console.log("Connected to database");
    } catch (error) {
        console.log(error);
    }
} 

