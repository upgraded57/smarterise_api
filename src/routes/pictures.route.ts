import express from "express";
import { errorCatcher } from "../functions/errorHandler";
import {
  GetAllPictures,
  GetSinglePicture,
} from "../controllers/pictures.controller";

const router = express.Router();

router.get("/", errorCatcher(GetAllPictures));
router.get("/:pictureId", errorCatcher(GetSinglePicture));

export default router;
