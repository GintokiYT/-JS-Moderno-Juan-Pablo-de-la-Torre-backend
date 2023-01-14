import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import router from './routes/index.js';
import cors from 'cors';

// Crear el servidor
const app = express();

// Habilitar cors
// const whileList = ['http://localhost:3000', 'http://localhost:4000'];
// const corsOptions = {
//   origin: (origin, callback) => {
//     const existe = whileList.some( dominio => dominio === origin );
//     if( existe ) { callback(null, true); }
//     else { callback(new Error('No permitido por CORS')); }
//   }
// };
// app.use(cors(corsOptions));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

// const whitelist = ['http://localhost:3000', 'http://localhost:4000']
// export const corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }
// app.use(cors(corsOptions));

// Conectarse a mongodb
mongoose.connect('mongodb://127.0.0.1:/veterinaria', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("error", err => console.log("err", err));
mongoose.connection.on("connected", (err, res) => console.log("MongoDB connected successfully!"));

// Habilitar el bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Habilitar Routing
app.use('/', router);

// Puerto y arrancar el servidor
app.listen(4000, () => {
  console.log('Servidor listening on port 4000');
});