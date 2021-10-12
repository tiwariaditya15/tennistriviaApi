import express from "express";
import { getScores, addScore } from "../controllers/score.controller";
const router = express.Router();

router.route("/").get(getScores);
router.route("/").post(addScore);

export default router;
