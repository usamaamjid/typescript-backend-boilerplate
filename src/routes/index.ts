import express from "express";
import testApiRoutes from "./testApiRoutes";

const router = express.Router();

router.use("/test-api", testApiRoutes);
export default router;
