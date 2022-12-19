const { Router } = require('express');

const userController = require('../controllers/UserController/index');
const route = Router();

route.post('/users', userController.createUser);
route.get('/users', userController.getUsers);

module.exports = route;
