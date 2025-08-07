const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Ruta para registrar un nuevo usuario
router.post('/register', async (req, res) => {
  try {
    const { user_name, email, password_hash } = req.body;

    // Validar datos básicos
    if (!user_name || !email || !password_hash) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios.' });
    }

    // Crear nuevo usuario
    const newUser = new User({ user_name, email, password_hash });
    await newUser.save();

    res.status(201).json({ message: 'Usuario registrado exitosamente.', user: newUser });
  } catch (error) {
    res.status(500).json({ message: 'Error al registrar usuario.', error: error.message });
  }
});

// Ruta para configurar datos del usuario
router.put('/configure/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    // Actualizar usuario
    const updatedUser = await User.findByIdAndUpdate(id, updates, { new: true });

    if (!updatedUser) {
      return res.status(404).json({ message: 'Usuario no encontrado.' });
    }

    res.status(200).json({ message: 'Usuario actualizado exitosamente.', user: updatedUser });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar usuario.', error: error.message });
  }
});

module.exports = router;
