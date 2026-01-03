const { Client } = require("minio");

const minioClient = new Client({
  endPoint: "dockerdala.onrender.com", // Render primary URL
  port: 9000,                           // MinIO порті Render ішінде ғана қолжетімді
  useSSL: false,                        // SSL тек 443 үшін
  accessKey: process.env.MINIO_ROOT_USER,
  secretKey: process.env.MINIO_ROOT_PASSWORD,
});

module.exports = minioClient;
