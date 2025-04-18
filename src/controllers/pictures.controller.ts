import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { HttpExceptions } from "../functions/errorHandler";
import { Pictures } from "../../data/index";

const prisma = new PrismaClient({
  log: ["warn", "error"],
});

export const GetAllPictures = async (req: Request, res: Response) => {
  // const savePictures = Pictures.map(async (item) => {
  //   try {
  //     const res = await prisma.picture.create({
  //       data: {
  //         ...item,
  //       },
  //     });

  //     console.log("Picture Created", res.name);
  //   } catch (error) {
  //     console.log("Error", error);
  //   }
  // });

  // await Promise.all(savePictures);

  const pictures = await prisma.picture.findMany();
  const picttureViews = await prisma.pictureViews.findMany({
    select: {
      pictureId: true,
    },
  });
  return res.status(200).json({
    status: true,
    message: "Pictures found successfully",
    pictures: pictures.map((picture) => ({
      ...picture,
      views: picttureViews.filter((view) => view.pictureId === picture.id)
        .length,
    })),
  });
};

export const GetSinglePicture = async (req: Request, res: Response) => {
  const { pictureId } = req.params;
  if (!pictureId) {
    throw new HttpExceptions("Picture id not provided", 400, null);
  }

  const picture = await prisma.picture.findUnique({
    where: {
      id: pictureId as string,
    },
    include: {
      views: {
        select: {
          id: true,
        },
      },
    },
  });

  if (!picture) {
    throw new HttpExceptions("Picture not found", 404, null);
  }

  return res.status(200).json({
    status: true,
    message: "Picture found successfully",
    picture: {
      id: picture.id,
      author: picture.author,
      width: picture.width,
      height: picture.height,
      url: picture.url,
      download_url: picture.download_url,
      views: picture.views.length,
    },
  });
};
