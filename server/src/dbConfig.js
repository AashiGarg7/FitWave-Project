import mongoose from "mongoose";
const DBConnect = async (dbURI) => {
    try {
        await mongoose.connect(dbURI);
        console.log("Connected to MongoDB");
    }
    catch (error) {
        console.log("Error connecting to MongoDB Error Occured" + error);
        process.exit(1);
    }
}
export default DBConnect;