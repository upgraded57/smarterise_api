import express from "express";
import { errorCatcher } from "../functions/errorHandler";
import {
  GetPagesSummary,
  GetPicturesSummary,
  GetPictureViewers,
  GetSummary,
  GetUserPageViews,
  GetUsers,
} from "../controllers/admin.controllers";

const router = express.Router();

router.get("/summary", errorCatcher(GetSummary));
router.get("/picturesSummary", errorCatcher(GetPicturesSummary));
router.get("/users", errorCatcher(GetUsers));
router.get("/pages", errorCatcher(GetPagesSummary));
router.get("/pictureViewers/:pictureId", errorCatcher(GetPictureViewers));
router.get("/pageviews/:userId", errorCatcher(GetUserPageViews));

export default router;
