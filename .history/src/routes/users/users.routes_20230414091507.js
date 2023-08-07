const express = require('express');
const UserController = require('../../controllers/users.controllers');
const router = express.Router();

router.post("/insert_user",function(req, res){ UserController.createUser});
router.get("/getAll_user",function(req, res){ UserController.getUserData});
router.get("/getOne_user/:id",function(req, res){ UserController.getOneUserData});
router.post("/update_user/:id",function(req, res){ UserController.updateUserData});

module.exports = router;