const express = require('express');
const UserController = require('../../controllers/users.controllers');
const {createUser,getUserData, getOneUserData, updateUserData} = require('../../controllers/users.controllers');
const router = express.Router();

router.post("/insert_user", UserController.createUser);
router.get("/getAll_user", UserController.getUserData);
router.get("/getOne_user/:id", getOneUserData);
router.post("/update_user/:id", updateUserData);

module.exports = router;