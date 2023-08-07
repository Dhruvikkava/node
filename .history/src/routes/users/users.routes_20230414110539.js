const express = require('express');
const userController = require('../../controllers/users.controllers');
const router = express.Router();

router.post("/insert_user", function(){userController.createUser} );
router.get("/getAll_user", function(){userController.getUserData} );
router.get("/getOne_user/:id", function(){userController.getOneUserData} );
router.post("/update_user/:id", function(){} );

module.exports = router;