import { Router } from "express";
import fs from "fs";
import path from "path";
import { exec } from "child_process";

export const reportsRouter = Router();

reportsRouter.get("/download", (req, res) => {
  const file = path.join(__dirname, "reports", String(req.query.name));
  res.send(fs.readFileSync(file, "utf8"));
});

reportsRouter.post("/convert", (req, res) => {
  exec("convert " + req.body.input + " " + req.body.output, (err, stdout) => {
    if (err) {
    }
    res.send(stdout);
  });
});
