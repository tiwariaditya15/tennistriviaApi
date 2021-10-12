import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getForehandQuizes = async (req: Request, res: Response) => {
  try {
    const quizes = await prisma.quiz.findMany({
      where: {
        category: "Forehand",
      },
    });
    return res.status(200).json({ quizes });
  } catch (error) {
    console.log({ error });
    return res.status(500).json({ error });
  }
};

export const getBackhandQuizes = async (req: Request, res: Response) => {
  try {
    const quizes = await prisma.quiz.findMany({
      where: {
        category: "Backhand",
      },
    });
    return res.status(200).json({ quizes });
  } catch (error) {
    console.log({ error });
    return res.status(500).json({ error });
  }
};
export const getBasicsQuizes = async (req: Request, res: Response) => {
  try {
    const quizes = await prisma.quiz.findMany({
      where: {
        category: "Basic",
      },
    });
    return res.status(200).json({ quizes });
  } catch (error) {
    console.log({ error });
    return res.status(500).json({ error });
  }
};
