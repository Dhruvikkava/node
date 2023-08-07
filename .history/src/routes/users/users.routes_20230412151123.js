const express = require('express');
const router = express.Router();

router.get("/api", function (req, res) {
    res.send("Wiki home page");
});

module.exports = router;