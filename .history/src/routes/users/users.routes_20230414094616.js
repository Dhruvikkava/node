const express = require('express');
const router = express.Router();

router.post("/insert_user", createUser);
router.get("/getAll_user", getUserData);
router.get("/getOne_user/:id", getOneUserData);
router.post("/update_user/:id", updateUserData);

module.exports = router;