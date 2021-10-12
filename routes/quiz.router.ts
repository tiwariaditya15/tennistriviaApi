import express from "express";
import {
  getForehandQuizes,
  getBackhandQuizes,
  getBasicsQuizes,
} from "../controllers/quiz.controller";
const router = express.Router();

router.route("/basics").get(getBasicsQuizes);
router.route("/forehand").get(getForehandQuizes);
router.route("/backhand").get(getBackhandQuizes);
export default router;
