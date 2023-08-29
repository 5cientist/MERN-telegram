const express = require("express");
const router = express.Router();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const extension = file.originalname.split(".").pop();
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});
const upload = multer({ storage: storage });

router.get("/", (req, res) => {
  res.json({
    message: "Access GET Profile Methods",
  });
});

router.post("/upload", upload.single("upload_file"), (req, res) => {
  console.log(req.body);
  console.log(req.file);

  res.json({
    message: "Image uploaded",
  });
});

module.exports = router;
