// Harmless canary. If a review tool executes this repository's code or config
// files, this writes a marker file to the temp folder so the test can see it.
const fs = require("fs");
const os = require("os");
const path = require("path");

const dir = path.join(os.tmpdir(), "innspill-canary");
fs.mkdirSync(dir, { recursive: true });
const who = process.argv[2] || "unknown";
fs.writeFileSync(path.join(dir, `${who}-${Date.now()}.txt`), process.argv.join(" "));
