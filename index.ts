import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import * as dotenv from "dotenv";
import quizRouter from "./routes/quiz.router";
import scoreRouter from "./routes/score.router";
import userRouter from "./routes/user.router";
import verifyToken from "./middlewares/verifyToken.middleware";

dotenv.config();

const app = express();
const PORT: number = parseInt(process.env.PORT as string, 10);

app.use(cors());
app.use(express.json());
app.use("/quizes", quizRouter);
app.use("/accounts", userRouter);
app.use(verifyToken);
app.use("/scores", scoreRouter);

app.listen(PORT, () => console.log(`server running at port ${PORT}`));
