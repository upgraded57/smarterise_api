import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: ["warn", "error"],
});

export const GetSummary = async (req: Request, res: Response) => {
  const totalUsers = await prisma.user.findMany({
    where: {
      type: "user",
    },
    select: {
      id: true,
    },
  });

  const totalPictures = await prisma.picture.findMany({
    select: {
      id: true,
    },
  });

  const totalPictureViews = await prisma.pictureViews.findMany({
    select: {
      id: true,
    },
  });

  return res.status(200).json({
    status: true,
    message: "Summary gotten successfully",
    data: {
      totalUsers: totalUsers.length,
      totalPictures: totalPictures.length,
      totalPictureViews: totalPictureViews.length,
    },
  });
};

export const GetPicturesSummary = async (req: Request, res: Response) => {
  const pictures = await prisma.picture.findMany({
    include: {
      views: {
        select: {
          id: true,
        },
      },
    },
  });

  return res.status(200).json({
    status: true,
    message: "Pictures found successfully",
    pictures: pictures.map((p) => ({
      id: p.id,
      author: p.author,
      width: p.width,
      height: p.height,
      url: p.url,
      download_url: p.download_url,
      name: p.name,
      views: p.views.length,
    })),
  });
};

export const GetUsers = async (req: Request, res: Response) => {
  const users = await prisma.user.findMany({
    where: {
      type: "user",
    },
  });

  const pictureViews = await prisma.pictureViews.findMany({
    select: {
      userId: true,
    },
  });

  return res.status(200).json({
    status: true,
    message: "Users found successfully",
    users: users.map((user) => ({
      ...user,
      views: pictureViews.filter((view) => view.userId === user.id).length,
    })),
  });
};

export const GetPagesSummary = async (req: Request, res: Response) => {
  const pages = await prisma.pageViews.findMany();

  return res.status(200).json({
    status: true,
    message: "Page summary found",
    summary: {
      home: pages.filter((page) => page.page.includes("home")).length,
      pictures: pages.filter((page) => page.page.includes("picture")).length,
      about: pages.filter((page) => page.page.includes("about")).length,
    },
  });
};
