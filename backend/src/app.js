// app.js
// Este archivo configura Express y define las rutas principales

import express from "express";
import cors from "cors";
import { supabase } from "./config/supabase.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use("/auth", authRoutes);

// Ruta base
app.get("/", (req, res) => {
  res.send("Cognify API funcionando");
});

// Ruta de prueba para conexión a Supabase
app.get("/test-db", async (req, res) => {
  const { data, error } = await supabase
    .from("usuarios")
    .select("*");

  if (error) {
    return res.status(500).json({
      message: "Error conectando con Supabase",
      error: error.message
    });
  }

  res.json(data);
});

export default app;