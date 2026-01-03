const express = require("express");
const multer = require("multer");
const minioClient = require("../utils/minioClient");

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post("/upload", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: "Файл жоқ" });

    const fileName = Date.now() + "-" + req.file.originalname;
    await minioClient.putObject("first-bucket", fileName, req.file.buffer);

    // Беккенд арқылы фронтқа берілетін URL
    const fileURL = `/files/${fileName}`;
    res.json({ message: "Жүктелді", url: fileURL });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Файлды сақтау қатесі" });
  }
});

module.exports = router;
