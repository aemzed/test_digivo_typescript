import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

app.post("/receive-webhook", (req, res) => {
    console.log("📩 Webhook diterima:", req.body);
    res.status(200).send("OK");
});

app.listen(4000, () => {
    console.log("Receiver running on http://localhost:4000");
});
