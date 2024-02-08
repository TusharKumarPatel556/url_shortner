const express = require("express");
const { reduceUrl, getUrl } = require("../controllers/urlController");
const router = express.Router();

router.post("/", reduceUrl);
router.get("/:shortId", getUrl);

module.exports = router;
