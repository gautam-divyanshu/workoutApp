import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import router from "./routes/workout.js";

const app = express();
const port = 4000;
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

//connecting to server
mongoose
  .connect("mongodb://127.0.0.1:27017/workout")
  .then(() => {
    app.listen(port, () => {
      console.log(`server is running on port http://localhost:${port}/`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
