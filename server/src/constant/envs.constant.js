import "dotenv/config";

const envVariables = Object.freeze({
  backendPort: process.env.BACKEND_PORT || 3001,
  mongodbUri: process.env.MONGODB_URI,
});

export default envVariables;
