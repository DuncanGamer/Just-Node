
const users = [
    {id: 1, name: 'John', age: 20},
    {id: 2, name: 'Daniel', age: 42},
    {id: 3, name: 'Laura', age: 37},
]

const getUsers = (req, res) => {
    res.render('users', {users:users})
}

const getCreateUser = (req, res) => {
    res.render('create-user')
}

const getUpdeteUser = (req, res) => {
    res.render('update-user')
}

const getDeletUser = (req, res) => {
    res.render('delete-user')
}
const createUser = (req, res) => {
   console.log (req.body)
    users.push(req.body)
    res.render('users', {users:users})
}
const updateUser = (req, res) => {
}
const deleteUser = (req, res) => {
}

module.exports = { 
    getUsers, 
    getCreateUser, 
    getUpdeteUser, 
    getDeletUser,
    createUser,
    updateUser,
    deleteUser }