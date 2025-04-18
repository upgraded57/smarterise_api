import express from "express";
import picturesRoute from "./pictures.route";
import authRoute from "./auth.route";
import adminRoute from "./admin.route";
const router = express.Router();

router.use("/pictures", picturesRoute);
router.use("/auth", authRoute);
router.use("/admin", adminRoute);

export default router;
