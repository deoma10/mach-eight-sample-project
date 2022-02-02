const express = require('express'); // Requerir el framework Express
const path = require('path'); // Requerir el módulo Path
const port = process.env.PORT || 3000;
const app = express();


const rutas = require('./router/index.routes')
app.set('view engine', 'ejs');
app.use(express.static(path.resolve(__dirname,  '..', 'public')));
app.use(express.urlencoded({extended: false})); // Middleware que recoge información de los formularios
app.use(express.json()); // Complemento de URL encoded

app.set('views', path.resolve(__dirname, './views'));

app.use('/', rutas);


app.listen(port, () => {
console.log(`Server running in port: ${port}`);
});