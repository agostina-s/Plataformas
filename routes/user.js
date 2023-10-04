const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

//Obtenemos los usuarios en la base de datos
router.get('/users', userController.getAllUsers);

//Creamos los nuevos usuarios en la base de datos
router.post('/users', userController.createUser);

//Editamos los usuarios en la base de datos
router.put('/users/:id',userController.updateUser);

//Eliminamos los usuarios en la base de datos
router.delete('/users/:id',userController.deleteUser)

module.exports = router;