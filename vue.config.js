const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === "production" ? "/profile/" : "/",
  transpileDependencies: true,

  // * Import global variables to all Vue components
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/styles/variables.sass"
        `,
      },
    },
  },
});
