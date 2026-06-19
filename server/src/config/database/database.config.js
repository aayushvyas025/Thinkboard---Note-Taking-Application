import mongoose from "mongoose";
import envVariables from "#constant/envs.constant";

const { mongodbUri } = envVariables;

const databaseConnection = async () => {
  try {
    await mongoose.connect(mongodbUri);
    console.log("Database connection established successfully");
  } catch (error) {
    console.error(`Error, while connection to database:${error.message}`);
    process.exit(1);
  }
};

export default databaseConnection;
