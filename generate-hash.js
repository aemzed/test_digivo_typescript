const crypto = require("crypto");

const body = JSON.stringify({
    url_gambar: "https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png",
    persentase_kompresi: "60"
});

const secret = "rahasia123456"; // sesuai isi .env kamu

const hash = crypto
    .createHmac("sha512", secret)
    .update(body)
    .digest("hex");

console.log(hash);