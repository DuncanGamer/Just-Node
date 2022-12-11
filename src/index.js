const express = require('express');
const app = express();
const port = 3000;
const users = require('./routes/users');
const path = require('path');
const loggedmiddleware = require('./middlewares/logged')

//configuraciones
app.set ('title', "aplicacion hecha en node")
app.set ('views', path.join(__dirname, 'views'))
app.set ('view engine', 'ejs')
//middlewares
app.use(loggedmiddleware.isLogged)
app.use (express.static(path.join(__dirname, 'public')))

//rutas

app.get('/', (req, res) => {
    res.render('index');
});

app.use('/users',users)

app.listen(port, () => {
    console.log( `listening at http://localhost:${port}`)
});
