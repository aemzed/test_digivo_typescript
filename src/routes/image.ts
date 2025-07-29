import express from "express";
import { verifyHmac } from "../middleware/auth";
import { convertImageToWebp } from "../utils/webp";
import path from "path";

const router = express.Router();

router.post("/convert", verifyHmac, async (req, res) => {
    const { url_gambar, persentase_kompresi } = req.body;

    if (!url_gambar) {
        return res.status(400).json({ status: false, message: "url_gambar wajib diisi" });
    }

    const compression = parseInt(persentase_kompresi) || 60;

    try {
        const { filePath, fileSize } = await convertImageToWebp(url_gambar, compression);

        return res.status(200).json({
            status: true,
            message: "Konversi berhasil",
            url_webp: `/uploads/${path.basename(filePath)}`,
            ukuran_webp: `${(fileSize / 1024).toFixed(2)} KB`,
        });
    } catch (err: any) {
        return res.status(500).json({
            status: false,
            message: "Gagal mengonversi gambar: " + err.message,
        });
    }
});

export default router;
