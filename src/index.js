const express = require('express');
const app = express();
const port = 3000;
const users = require('./routes/users');
const path = require('path');
const loggedmiddleware = require('./middlewares/logged')

//configuraciones
app.set ('title', "aplicacion hecha en node.js")

app.set ('view engine', 'ejs')
app.set ('views', path.join(__dirname, 'views'))
//middlewares
//app.use(loggedmiddleware.isLogged)
app.use (express.static(__dirname + '/public'))


app.use(express.urlencoded({extended: false}))
//rutas

app.get('/', (req, res) => {
    res.render('index');
});

app.use('/users',users)

app.listen(port, () => {
    console.log( `listening `+ app.get('title') +`at http://localhost:${port}`)
});
