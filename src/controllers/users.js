


const getUsers = (req, res) => {
    res.render('users')
}

const createUser = (req, res) => {
    res.render('create-user')
}

const updeteUser = (req, res) => {
    res.render('update-user')
}

const deletUser = (req, res) => {
    res.render('delete-user')
}
module.exports = { getUsers, createUser, updeteUser, deletUser }