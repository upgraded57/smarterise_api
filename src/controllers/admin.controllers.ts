import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { HttpExceptions } from "../functions/errorHandler";

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

export const GetPictureViewers = async (req: Request, res: Response) => {
  const { pictureId } = req.params;
  const viewersIds = await prisma.pictureViews.findMany({
    where: {
      pictureId,
      NOT: {
        userId: null,
      },
    },
    select: {
      userId: true,
    },
  });

  if (!viewersIds || viewersIds.length === 0) {
    throw new HttpExceptions("Picture has no viewers yet", 404, null);
  }

  const userIds = viewersIds.map((item) => item.userId);

  const viewers = await prisma.user.findMany({
    where: {
      id: {
        in: userIds as string[],
      },
    },
  });

  return res.status(200).json({
    status: true,
    message: "Page summary found",
    viewers,
  });
};

export const GetUserPageViews = async (req: Request, res: Response) => {
  const { userId } = req.params;

  const views = await prisma.pageViews.findMany({
    where: {
      userId,
    },
  });

  if (!views || views.length === 0) {
    throw new HttpExceptions("User has no page views yet", 404, null);
  }

  let pictureIdArray: string[] = [];
  views.map((view) => {
    const pictureId = view.pictureId;

    if (pictureId) {
      pictureIdArray.push(pictureId);
    }
  });

  const viewedPictures = await prisma.picture.findMany({
    where: {
      id: {
        in: pictureIdArray,
      },
    },
  });

  return res.status(200).json({
    status: true,
    message: "User page views found successfully ",
    views: {
      pages: views,
      pictures: viewedPictures,
    },
  });
};
