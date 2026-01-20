import express from "express";
import { askOpenAI } from "../services/openai.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { history } = req.body;

  if (!Array.isArray(history)) {
    return res.status(400).json({ error: "history must be an array" });
  }

  try {
    const result = await askOpenAI(history);
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "AI error" });
  }
});

export default router;
