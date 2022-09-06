module.exports = {
    env: {
        development: {
            presets: ["@vue/app"]
        },
        production: {
            presets: ["@vue/app"]
        },
        test: {
            presets: [["env", { targets: { node: "current" } }]]
        }
    }
};
