// routes/uploadRoutes.js
const express = require("express");
const router = express.Router();
const upload = require("../utils/middlewares/multer");
const uploadController = require("../controllers/UploadController");

router.post("/:userId", upload.single("image"), uploadController.uploadImage);
router.get("/:userId", uploadController.getImage);

module.exports = router;
