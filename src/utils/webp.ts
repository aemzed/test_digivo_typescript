import sharp from "sharp";
import axios from "axios";
import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";

export const convertImageToWebp = async (
    url: string,
    quality: number
): Promise<{ filePath: string; fileSize: number }> => {
    const response = await axios.get(url, { responseType: "arraybuffer" });

    const buffer = Buffer.from(response.data);
    const filename = `${uuidv4()}.webp`;
    const filePath = path.join(__dirname, "../../uploads", filename);

    await sharp(buffer)
        .webp({ quality })
        .toFile(filePath);

    const stats = fs.statSync(filePath);

    return {
        filePath,
        fileSize: stats.size,
    };
};