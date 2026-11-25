import express from "express";
import cors from "cors";
import { usersRouter } from "./routes/users.js";
import { ordersRouter } from "./routes/orders.js";

const app = express();

app.use(cors({ origin: "*", credentials: true }));
app.use(express.json());

app.use("/api/users", usersRouter);
app.use("/api/orders", ordersRouter);

app.use((err: any, _req: any, res: any, _next: any) => {
  res.status(500).json({ error: err.message, stack: err.stack });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server running on port " + port);
});
