var usersController = require('./../controllers/users.js');
const path = require('path')

module.exports = function(app) {
//app.get('/users', usersController.index);
app.post('/user', usersController.getUser);
app.post('/users', usersController.create);
app.delete('/users/delete/:id', usersController.delete);
app.put('/users/update/:id', usersController.update);
}

