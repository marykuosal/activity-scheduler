import activities from "./routes/activities";
import connection from "./db";
import cors from "cors";
import express, { json } from "express";
const app = express();

connection();

app.use(json());
app.use(cors());

app.use("/api/activities", activities);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));