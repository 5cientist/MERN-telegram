const express = require("express");
const router = express.Router();
const { checkAuth } = require("../middlewares/auth");

router.get("/", (req, res) => {
  res.json({
    message: "Access GET Methods",
  });
});

router.post("/", checkAuth, (req, res) => {
  res.json({
    message: "Access POST Methods",
  });
});

module.exports = router;
