// middlewares/multer.js
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // specify the upload directory
  },
  filename: function (req, file, cb) {
    cb(null, req.params.userId + ".jpg"); // set the filename
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
