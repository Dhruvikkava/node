const express = require('express');
const {userController} = require('../../controllers/users.controllers');
const router = express.Router();

router.post("/insert_user", function(req, res){userController.createUser} );
router.get("/getAll_user", function(req, res){userController.getUserData} );
router.get("/getOne_user/:id", function(req, res){userController.getOneUserData} );
router.post("/update_user/:id", function(req, res){userController.updateUserData} );

module.exports = router;