const express = require('express');
const createUser = require('../../controllers/users.controllers');
const router = express.Router();

router.get("/get-data", createUser);

module.exports = router;