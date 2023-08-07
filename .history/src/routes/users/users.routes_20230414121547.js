const express = require('express');
const userController = require('../../controllers/users.controllers');
const router = express.Router();

const myController = new userController();

router.post("/insert_user", myController.createUser);
router.get("/getAll_user", myController.getUserData);
router.get("/getOne_user/:id", myController.getOneUserData);
router.post("/update_user/:id", myController.updateUserData);

module.exports = router;