const express = require("express");
const { getStock, getHerd } = require("../controllers/yakController");

const router = express.Router();

router.get("/stock/:T", getStock);
router.get("/herd/:T", getHerd);

module.exports = router;
