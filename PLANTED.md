# Planted problems

The code has no hint comments, so tools are not helped by them. Use this list as the answer key.

| Id | Problem | Where |
|---|---|---|
| P01 | Hallucinated package `express-auth-helper-pro` | src/routes/users.ts, package.json |
| P02 | Empty catch blocks | src/routes/users.ts, src/routes/orders.ts |
| P03 | Admin delete route without auth | src/routes/users.ts |
| P04 | SQL injection by string concatenation | src/routes/users.ts, src/routes/orders.ts |
| P05 | CORS open to all origins with credentials | src/server.ts |
| P06 | Copy-pasted validation function | users.ts and orders.ts |
| P07 | Unused exports | src/utils/format.ts |
| P08 | Unused file | src/utils/legacy.ts |
| P09 | Hardcoded credentials (AWS example keys, placeholder API key) | src/services/payment.ts |
| P10 | Over-engineered singleton factory | src/db.ts |
| P11 | eval on user input | src/routes/orders.ts |
| P12 | Math.random for a token | src/routes/orders.ts |
| P13 | Deprecated APIs (new Buffer, url.parse) | src/routes/orders.ts |
| P14 | Stack trace sent to client | src/server.ts |
| P15 | Stub / not implemented / TODO | src/services/payment.ts |
| P16 | Missing dependency `openai` and phantom API `chat.complete` | src/services/ai.ts |
| P17 | Hardcoded weak JWT secret | src/routes/users.ts |
| P18 | XSS via innerHTML; prompt injection into system prompt | src/web/main.ts, src/services/ai.ts |
| P19 | Token in localStorage | src/web/main.ts |
| P20 | Vulnerable dependency versions (lodash, minimist, jsonwebtoken, express, moment) | package.json, package-lock.json |
| P21 | Unused dependencies (left-pad, moment) | package.json |
| P22 | process.env used, no .env.example; no tests; no CI | repository |

Canary files (`vite.config.ts`, `vitest.config.ts`, `eslint.config.js`,
`scripts/canary.cjs`) write a marker to the temp folder if a tool executes them.
