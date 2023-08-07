const express = require('express');
const userController = require('../../controllers/users.controllers');
const router = express.Router();

router.post("/insert_user", function(req, res){userController.createUser(req, res)} );
router.get("/getAll_user", function(req, res){userController.getUserData(req, res)} );
router.get("/getOne_user/:id", function(req, res){userController.getOneUserData(req, res)} );
router.post("/update_user/:id", function(req, res){userController.updateUserData(req, res)} );

module.exports = router;