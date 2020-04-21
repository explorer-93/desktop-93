import express from "express";
import pug from "pug";
import * as root from "./controllers/root";
import * as spreadsheet from "./controllers/spreadsheet";

const app: any = express();

app.set("port", process.env.PORT || 3000);
app.set("view engine", "pug");
app.get("/", root.index);
app.get("/spreadsheet", spreadsheet.index);
app.use('/', express.static('static/public'));

export default app;
