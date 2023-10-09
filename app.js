const express = require('express');
const app = express();
const PORT = 8000;
const cors = require('cors')

let corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 
}
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors(corsOptions ));


app.get('/', (req, res) => {
  res.send('¡Servidor Backend!');
});


app.set('port',process.env.PORT || 8000)


app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

app.use("/api/razas",require('./src/routes/razas.routes'))
                             

module.exports = app