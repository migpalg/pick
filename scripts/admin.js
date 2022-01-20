/**
 * This command roots to other subcommands listend in the "commands" directory
 */
const path = require("path");
const { hideBin } = require("yargs/helpers");

require("yargs/yargs")(hideBin(process.argv))
  .scriptName("admin")
  .commandDir(path.resolve(__dirname, "commands"))
  .demandCommand()
  .help().argv;
