import express from "express";
import envVariables from "#constant/envs.constant";
import apiRoutes from "#constant/routes.constant";
import notesRoutes from "#routes/notes/notes.route";
import setupErrorMiddleware from "#middleware/error/error.middleware";

const { backendPort } = envVariables;
const { BASE } = apiRoutes;

const app = express();

app.use(express.json());
app.use(BASE, notesRoutes);

setupErrorMiddleware(app);

app.listen(backendPort, () => {
  console.log(`Your server is running on http://localhost:${backendPort}`);
});
