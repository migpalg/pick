module.exports = {
  command: "create <name> [template]",
  desc: "Creates a new file with the provided name and template",
  builder: {
    template: {
      default: "typescript",
    },
  },
  handler: ({ name, template }) => {
    console.log(`creating "${name}" package with "${template}" template`);
  },
};
