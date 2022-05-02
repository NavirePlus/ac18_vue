const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: 'docs',
  pages: {
    index: {
      entry: 'src/main.js',
      title: "オレンジぷらねっとアンソロジー　オレぷらが大x3スキ!!"
    }
  }
})
