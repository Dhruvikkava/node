const express = require('express');
const {userController} = require('../../controllers/users.controllers');
const router = express.Router();

router.post("/insert_user", userController.createUser} );
router.get("/getAll_user", userController.getUserData} );
router.get("/getOne_user/:id", userController.getOneUserData} );
router.post("/update_user/:id", userController.updateUserData} );

module.exports = router;