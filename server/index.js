import express from "express";
import cors from "cors";
import generateReview from "./review.js";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/v1/reviews", async (req, res) => {
    const response = await generateReview(req.body.code);
    return res.json({ review: response });
});

app.listen(8000, () => {
    console.log("Server is running on http://localhost:8000");
});
