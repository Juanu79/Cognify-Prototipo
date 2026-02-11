// Este controlador contiene la lógica del registro

import { supabase } from "../config/supabase.js";

export const registerUser = async (req, res) => {
  const { nombre, email, password } = req.body;

  if (!nombre || !email || !password) {
    return res.status(400).json({
      message: "Todos los campos son obligatorios"
    });
  }

  console.log("Datos recibidos:", nombre, email, password);

  const { data, error } = await supabase
    .from("usuarios")
    .insert([
      { nombre, email, password }
    ]);

    console.log("Resultado Supabase:", data, error);

  if (error) {
    return res.status(500).json({
      message: "Error al registrar usuario",
      error: error.message
    });
  }

  res.status(201).json({
    message: "Usuario registrado correctamente",
    data
  });
};