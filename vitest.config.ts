import { writeFileSync, mkdirSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { defineConfig } from "vitest/config";

// Canary: proves whether a tool executed this config file.
const dir = join(tmpdir(), "innspill-canary");
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, `vitest-config-${Date.now()}.txt`), "vitest.config.ts executed");

export default defineConfig({ test: { include: ["test/**/*.test.ts"] } });
