import { Paciente } from '../models/paciente.js';

export const nuevoPaciente = async (req, res, next) => {
  const { nombre, propietario, telefono, fecha, hora, sintomas } = req.body;

  if(nombre === '' || 
     propietario === '' || 
     telefono === '' || 
     fecha === '' || 
     hora === '' || 
     sintomas === '') {
    console.log('Los campos estan vacios');
    return;
  }

  const paciente = new Paciente(req.body);
  try {
    await paciente.save();
    res.json({  
      mensaje: 'El cliente se agrego correctamente',
    });
  } 
  catch(error) {
    console.log(error.message);
    next();
  }
};

export const obtenerPacientes = async (req, res, next) => {
  try {
    const paciente = await Paciente.find();
    res.json(paciente);
  }
  catch(error) {
    console.log(error.message);
    next();
  }
};

export const obtenerPaciente = async (req, res, next) => {
  try {
    const paciente = await Paciente.findById(req.params.id);
    res.json(paciente);
  } 
  catch(error) {
    console.log(error.message);
    res.json({ error: 'Paciente no encontrado'});
    next();
  }
};

export const actualizarPaciente = async (req, res, next) => {
  try {
    const paciente = await Paciente.findByIdAndUpdate({_id: req.params.id}, req.body, {
      new: true,
    });
    res.json(paciente);
  }
  catch(error) {
    console.log(error.message);
    res.json({ error: 'Paciente no encontrado'});
    next();
  }
};

export const eliminarPaciente = async (req, res, next) => {
  try {
    const paciente = await Paciente.findByIdAndDelete({_id: req.params.id});
    res.json({mensaje: 'El paciente fue eliminado'});
  }
  catch (error) {
    console.log(error.message);
    res.json({ error: 'Paciente no encontrado'});
    next();
  }
};





