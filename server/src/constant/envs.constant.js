import "dotenv/config";

const envVariables = Object.freeze({
  backendPort: process.env.BACKEND_PORT || 3001,
});

export default envVariables;
