const express = require('express');
const createUser = require('../../controllers/users.controllers');
const router = express.Router();

router.post("/insert_user", createUser);
router.post("/getAll_user", createUser);

module.exports = router;