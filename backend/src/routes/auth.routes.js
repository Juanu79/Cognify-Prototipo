// Esta ruta maneja autenticación (register / login)

import express from "express";
import { registerUser } from "../controllers/auth.controller.js";

const router = express.Router();

// Registro de usuario normal
router.post("/register", registerUser);

export default router;