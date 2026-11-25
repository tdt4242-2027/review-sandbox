import { writeFileSync, mkdirSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { defineConfig } from "vite";

// Canary: proves whether a tool executed this config file.
const dir = join(tmpdir(), "innspill-canary");
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, `vite-config-${Date.now()}.txt`), "vite.config.ts executed");

export default defineConfig({
  root: "src/web",
});
