// controllers/uploadController.js
const fs = require("fs");

exports.uploadImage = (req, res) => {
  res.json({ message: "File uploaded successfully" });
};

exports.getImage = (req, res) => {
  const filePath = `uploads/${req.params.userId}.jpg`;

  try {
    if (fs.existsSync(filePath)) {
      res.sendFile(filePath);
    } else {
      res.status(404).json({ error: "Image not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
