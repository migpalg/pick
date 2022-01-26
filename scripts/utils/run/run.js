const { spawn } = require("child_process");

/**
 * runs a command and returns when the command exits
 * @param {string} cmd base command to run
 * @param {string[]} args argumments for the command
 */
exports.run = function (cmd, args) {
  return new Promise((resolve) => {
    const exec = spawn(cmd, args);

    exec.stdout.on("data", (chunk) => {
      console.log(chunk);
    });

    exec.stdout.on("close", () => resolve());
  });
};
