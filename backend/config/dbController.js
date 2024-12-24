import mongoose from "mongoose";

function connectDB() {
    if (!process.env.MONGODB_URI) {
        console.error("MONGODB_URI is not defined in environment variables.");
        return;
    }

    try {
        mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Error connecting to MongoDB:", error);
        return;
    }
}

export default connectDB;