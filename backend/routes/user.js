import express from "express";
import { login, signup } from "../controller/userController.js";
const router = express.Router();

router.post("/login", login);
router.post("/signup", signup);

export default router;
