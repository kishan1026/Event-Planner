import express from "express";
import cors from "cors";
import requirementRoutes from "./routes/requirement.routes.js";

const app = express();

app.use(
  cors({
    origin:[ "http://localhost:3000",
        "https://event-planner-ten-theta.vercel.app"
    ]
  })
);

app.use(express.json());

app.use("/api/requirements", requirementRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "GoPratle backend is running",
  });
});

export default app;