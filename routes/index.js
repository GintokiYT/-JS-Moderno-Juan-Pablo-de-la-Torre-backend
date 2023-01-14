import { nuevoPaciente, obtenerPacientes, obtenerPaciente, actualizarPaciente, eliminarPaciente } from '../controllers/paciente.js';
import express from 'express';

const router = express.Router();

router.get('/', () => console.log('En el Home'));
// Agregar un nuevo paciente
router.post('/pacientes', nuevoPaciente);
// Obtiene todos los pacientes
router.get('/pacientes', obtenerPacientes)
// Obtiene un paciente en especifico
router.get('/pacientes/:id', obtenerPaciente);
// Actualizar un paciente
router.put('/pacientes/:id', actualizarPaciente);
// Eliminar un paciente
router.delete('/pacientes/:id', eliminarPaciente);


export default router;