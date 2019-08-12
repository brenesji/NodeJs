const express = require ('express');
const path = require ('path');
const app = express();
//Declaro servicio

app.use('/servicio/miembros', require('./api/miembros.js'))



//Declaro website
const folder = path.join(__dirname, 'public');
app.use(express.static(folder));
app.listen(8080,() => {console.log ('API REST corriendo en http://localhost:8080')});


//Para iniciar con mensaje

//const port = process.env.port || 8080
//app.listen(8080, () => {
//console.log ('API REST corriendo en http://localhost:8080')
//})