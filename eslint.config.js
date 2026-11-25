import { writeFileSync, mkdirSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

// Canary: proves whether a tool loaded the repository's own ESLint config.
const dir = join(tmpdir(), "innspill-canary");
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, `eslint-config-${Date.now()}.txt`), "eslint.config.js executed");

export default [];
