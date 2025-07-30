import sharp from "sharp";
import axios from "axios";
import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";

export const convertImageToWebp = async (
    url: string,
    quality: number
): Promise<{ filePath: string; fileSize: number }> => {
    const response = await axios.get<ArrayBuffer>(url, { responseType: "arraybuffer" });
    const buffer = Buffer.from(response.data);
    const uploadsDir = path.resolve(process.cwd(), "uploads");
    await fs.promises.mkdir(uploadsDir, { recursive: true });

    const filename = `${uuidv4()}.webp`;
    const filePath = path.join(uploadsDir, filename);
    await sharp(buffer)
        .webp({ quality })
        .toFile(filePath);
    const stats = await fs.promises.stat(filePath);

    return {
        filePath,
        fileSize: stats.size,
    };
};
