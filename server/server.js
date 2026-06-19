import express from "express";
import envVariables from "#constant/envs.constant";

const { backendPort } = envVariables;
const app = express();

app.listen(backendPort, () => {
  console.log(`Your server is running on http://localhost:${backendPort}`);
});
