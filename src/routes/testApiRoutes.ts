import express from "express";
import { testApi } from "@controllers";

const router = express.Router();
router.get("/", testApi);
export default router;
