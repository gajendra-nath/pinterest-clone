import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const url = process.env.MONGO_URL || process.env.MONGODB_URI;
    if (!url) {
      throw new Error("MongoDB connection URL is missing in environment variables (MONGO_URL / MONGODB_URI)");
    }

    await mongoose.connect(url, {
      dbName: "pinterest",
    });

    console.log("Mongodb connected");
  } catch (error) {
    console.log(error);
  }
};

export { connectDb };
export default connectDb;
