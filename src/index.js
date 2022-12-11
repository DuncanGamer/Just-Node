const express = require('express');
const app = express();
const port = 3000;
const users = require('./routes/users');
const path = require('path');
const loggedmiddleware = require('./middlewares/logged')

app.use(loggedmiddleware.isLogged)
app.use (express.static(path.join(__dirname, 'public')))

//rutas

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/users',users)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
