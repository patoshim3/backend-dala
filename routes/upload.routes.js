const express = require("express");
const multer = require("multer");
const minioClient = require("../utils/minioClient");

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

// Bucket аты
const BUCKET_NAME = "first-bucket";

// Файлды жүктеу
router.post("/upload", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: "Файл жоқ" });

    // Bucket бар ма тексереміз, жоқ болса жасаймыз
    const exists = await minioClient.bucketExists(BUCKET_NAME);
    if (!exists) {
      await minioClient.makeBucket(BUCKET_NAME, "us-east-1"); // аймағын өзіңе қарай өзгерте аласың
      console.log(`Bucket ${BUCKET_NAME} жасалды`);
    }

    const fileName = Date.now() + "-" + req.file.originalname;

    // Файлды жүктеу
    await minioClient.putObject(
      BUCKET_NAME,
      fileName,
      req.file.buffer,
      { 'Content-Type': req.file.mimetype } // маңызды
    );

    // Сыртқы URL құру (Render-де немесе MinIO хостың)
    const fileURL = `https://dockerdala.onrender.com/${BUCKET_NAME}/${fileName}`;

    res.json({ message: "Жүктелді", url: fileURL });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Файлды сақтау қатесі" });
  }
});

module.exports = router;
