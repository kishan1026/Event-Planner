import express from "express";
import {
  createRequirement,
  getRequirements,
} from "../controllers/requirement.controller.js";

const router = express.Router();

router.post("/", createRequirement);

router.get("/", getRequirements);

export default router;