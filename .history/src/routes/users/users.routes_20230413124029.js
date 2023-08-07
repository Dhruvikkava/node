const express = require('express');
const {createUser,getUserData, getOneUserData} = require('../../controllers/users.controllers');
const router = express.Router();

router.post("/insert_user", createUser);
router.get("/getAll_user", getUserData);
router.get("/getOne_user/:id", getOneUserData);

module.exports = router;