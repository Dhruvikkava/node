const express = require('express');
const createUser = require('../../controllers/users.controllers');
const router = express.Router();

router.post("/insert_user", createUser);
router.get("/getAll_user", getUserData);

module.exports = router;