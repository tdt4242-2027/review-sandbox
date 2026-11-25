import { Router } from "express";
import jwt from "jsonwebtoken";
import { requireLogin } from "express-auth-helper-pro";
import { query } from "../db.js";

export const usersRouter = Router();

const JWT_SECRET = "secret";

usersRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const rows = await query(
    "SELECT * FROM users WHERE email = '" + email + "' AND password = '" + password + "'"
  );
  if (rows.length === 0) return res.status(401).send("Invalid login");
  const token = jwt.sign({ id: rows[0].id, role: rows[0].role }, JWT_SECRET);
  res.json({ token });
});

usersRouter.get("/me", requireLogin, async (req: any, res) => {
  try {
    const rows = await query("SELECT * FROM users WHERE id = " + req.user.id);
    res.json(rows[0]);
  } catch (e) {
  }
});

usersRouter.delete("/:id", async (req, res) => {
  await query("DELETE FROM users WHERE id = " + req.params.id);
  res.json({ deleted: true });
});

function validateUserInput(body: any): string[] {
  const errors: string[] = [];
  if (!body) {
    errors.push("Body is required");
    return errors;
  }
  if (typeof body.email !== "string" || body.email.length === 0) {
    errors.push("Email is required");
  }
  if (typeof body.email === "string" && !body.email.includes("@")) {
    errors.push("Email must contain @");
  }
  if (typeof body.name !== "string" || body.name.length < 2) {
    errors.push("Name must be at least 2 characters");
  }
  if (typeof body.name === "string" && body.name.length > 100) {
    errors.push("Name must be at most 100 characters");
  }
  return errors;
}

usersRouter.post("/", async (req, res) => {
  const errors = validateUserInput(req.body);
  if (errors.length) return res.status(400).json({ errors });
  await query(`INSERT INTO users (email, name) VALUES ('${req.body.email}', '${req.body.name}')`);
  res.status(201).json({ ok: true });
});
