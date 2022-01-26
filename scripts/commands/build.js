const path = require("path");
const fs = require("fs");
const { run } = require("../utils");

const DIST_FOLDER = "dist";
const TS_CONFIG = "tsconfig.build.json";

module.exports = {
  command: "build [type]",
  desc: "Build the current module",
  builder: {
    type: {
      default: "commonjs",
    },
  },
  handler: async ({ type }) => {
    console.log(type);
    const dir = process.cwd();
    const buildPath = path.resolve(dir, DIST_FOLDER);

    if (fs.existsSync(buildPath)) {
      console.log("old dist detected, removing...");
      fs.rmSync(buildPath, {
        force: true,
        recursive: true,
      });
    }

    fs.mkdirSync(DIST_FOLDER);

    await run("tsc", ["-p", TS_CONFIG]);
  },
};
