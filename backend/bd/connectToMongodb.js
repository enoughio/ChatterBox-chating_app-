import mongoose from "mongoose";

const connectToMongodb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URL);
        console.log("connected to db");
    } catch (error) {
        console.log("fail to connect to db", error.message)
    }
}


export default connectToMongodb;