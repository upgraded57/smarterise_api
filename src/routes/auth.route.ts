import express from "express";
import { errorCatcher } from "../functions/errorHandler";
import {
  AdminSignin,
  UserSignin,
  UserSignup,
} from "../controllers/auth.controller";

const router = express.Router();

router.post("/signin", errorCatcher(UserSignin));
router.post("/signup", errorCatcher(UserSignup));
router.post("/admin/signin", errorCatcher(AdminSignin));

export default router;
