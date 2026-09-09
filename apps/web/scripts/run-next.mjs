import { spawn } from "node:child_process";
import { createRequire } from "node:module";

const command = process.argv[2];

if (command !== "dev" && command !== "start") {
  console.error("Usage: node scripts/run-next.mjs <dev|start>");
  process.exit(1);
}

const require = createRequire(import.meta.url);
const nextBin = require.resolve("next/dist/bin/next");
const port = process.env.WEB_PORT || "6200";

const child = spawn(process.execPath, [nextBin, command, "--port", port], {
  stdio: "inherit",
});

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }

  process.exit(code ?? 1);
});
