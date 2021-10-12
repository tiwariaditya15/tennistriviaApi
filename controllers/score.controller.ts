import { PrismaClient } from ".prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const getScores = async (req: Request, res: Response) => {
  try {
    const { userId } = req;
    const scores = await prisma.score.findMany({
      where: {
        playerId: userId,
      },
    });
    if (scores.length) {
      return res
        .status(200)
        .json({
          scores: scores.map((el) => ({
            score: el.score,
            category: el.category,
          })),
        });
    }
    res
      .status(404)
      .json({ errorMessage: "This user hasn't played any games." });
  } catch (error) {
    console.log({ error });
    res.status(500).json({ error });
  }
};

export const addScore = async (req: Request, res: Response) => {
  try {
    const { userId } = req;
    const { score, category }: { score: number; category: string } = req.body;
    const newScore = await prisma.score.create({
      data: {
        score: score,
        category: category,
        player: {
          connect: { id: userId },
        },
      },
    });
    res.status(201).json({ newScore });
  } catch (error) {
    console.group({ error });
    res.status(500).json({ error });
  }
};
