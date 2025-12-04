import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/v1/reviews", (req, res) => {
    return res.json({ review: req.body.code });
});

app.listen(8000, () => {
    console.log("Server is running on http://localhost:8000");
});
